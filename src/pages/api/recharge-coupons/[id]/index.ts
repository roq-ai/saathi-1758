import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { rechargeCouponValidationSchema } from 'validationSchema/recharge-coupons';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.recharge_coupon
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getRechargeCouponById();
    case 'PUT':
      return updateRechargeCouponById();
    case 'DELETE':
      return deleteRechargeCouponById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getRechargeCouponById() {
    const data = await prisma.recharge_coupon.findFirst(convertQueryToPrismaUtil(req.query, 'recharge_coupon'));
    return res.status(200).json(data);
  }

  async function updateRechargeCouponById() {
    await rechargeCouponValidationSchema.validate(req.body);
    const data = await prisma.recharge_coupon.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteRechargeCouponById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.recharge_coupon.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}

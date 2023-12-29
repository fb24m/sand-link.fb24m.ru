'use server'

import { prisma } from '../Prisma.service'
import type { IUser } from '@/interfaces/IUser.interface'
import type { IResponse } from '@/interfaces/IResponse.interface'

interface IGetById {
	id: number
}

interface IGetByUsername {
	username: string
}

interface IGetByEmail {
	email: string
	password: string
}

export const getUser = async (where: IGetById | IGetByUsername | IGetByEmail): Promise<IResponse<IUser>> => {
	const user: IUser | null = await prisma.user.findUnique({ where })

	if (user !== null) {
		return {
			ok: true,
			code: 200,
			message: 'success',
			data: user
		}
	} else {
		return {
			ok: false,
			code: 404,
			message: 'user not found'
		}
	}
}

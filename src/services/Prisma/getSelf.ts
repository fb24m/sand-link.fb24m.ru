'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { IUser } from '@/interfaces/IUser.interface'
import type { IResponse } from '@/interfaces/IResponse.interface'
import { getUser } from './getUser'
import { exists } from '@/functions/exists'

export const getSelf = async (redirectAfter: boolean = true): Promise<IResponse<IUser>> => {
	if (!cookies().has('link_saved_user') && redirectAfter) {
		redirect('/login')
	}

	const savedData = {
		email: cookies().get('link_saved_user')?.value.split(':')[0],
		password: cookies().get('link_saved_user')?.value.split(':')[1]
	}

	const user = await getUser({
		email: exists(savedData.email),
		password: exists(savedData.password)
	})

	return user
}

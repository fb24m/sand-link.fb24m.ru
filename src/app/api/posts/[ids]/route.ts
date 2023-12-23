/**
 * Эта функция TypeScript извлекает сообщения из базы данных на основе списка идентификаторов авторов.
 * @param {NextRequest} request - Параметр request — это объект, который представляет входящий
 * HTTP-запрос. Он содержит такую информацию, как метод запроса, заголовки и тело.
 * @param  - Приведенный выше код является примером обработчика запроса GET в маршруте API Next.js. Он
 * использует Prisma для запроса базы данных и получения сообщений на основе предоставленных
 * идентификаторов авторов.
 * @returns Код возвращает ответ JSON со следующими свойствами:
 * - ok: логическое значение, указывающее, был ли запрос успешным.
 * - сообщение: строковое сообщение, указывающее статус запроса.
 * - код: целочисленное значение, представляющее код состояния ответа.
 * - сообщения: массив объектов сообщений, полученных из базы данных Prisma.
 */

import { prisma } from '@/services/Prisma.service'
import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { ids: string } }): Promise<any> => {
	const idsArray = params.ids.split(',').map(item => +item)

	const posts = await prisma.post.findMany({
		where: {
			authorId: {
				in: idsArray
			}
		}
	})

	return Response.json({
		ok: true,
		message: 'success',
		code: 200,
		posts
	})
}

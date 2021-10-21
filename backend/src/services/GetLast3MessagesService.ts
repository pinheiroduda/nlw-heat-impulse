import prismaClient from '../prisma'; 



class GetLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        creates_At: "desc"
      },
      include: {
        user: true,
      },
    });
    

    //SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATES_AT DESC

    return messages;
  }
}

export { GetLast3MessagesService }
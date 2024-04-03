import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '43c90a53-08df-4935-bd2b-2a342726b277',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('database seeded!')
  prisma.$disconnect()
})

import { builder } from "../builder"
import { prisma } from "../db"

builder.prismaObject('User', {
    fields: t => ({        
        id: t.exposeID("id"),
        name: t.exposeString("name"),
    })
})

builder.queryField('users', (t) => 
    t.prismaField({
        type:['User'],
        resolve: async (query,root, args,ctx,info) => {
            return prisma.user.findMany({...query})
        }
    })
)
builder.mutationField('createUser',(t) => 
    t.prismaField({
        type:'User',
        args:{
            name: t.arg.string({required: true})
        },
        resolve: (query,root,args,ctx,info) => {
            return prisma.user.create({
                ...query,
                data:{
                    name: args.name,
                }
            })
        }
    })
)
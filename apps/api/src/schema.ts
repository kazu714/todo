import { builder } from "./builder"

import './models/User'

// queryTypeはアプリで１個だけである必要があるので空で設定し
// src/models/〇〇.tsのbuilder.queryFieldでここに追加されていくイメージ
builder.queryType({})
// mutationも同様
builder.mutationType({})

export const schema = builder.toSchema({})
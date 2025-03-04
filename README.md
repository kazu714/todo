
手順等をNotionでまとめている
https://www.notion.so/Todo-180178a7b330804fbb5cc970b2faf6e6

# ルール
- mainから作業ブランチを切り、そこで作業
- 日付でtodoリストをreadmeに書く
- 手順やノウハウはNotionに書く

# 記録

このレポジトリでやりたいことリスト
- [ ] cssを整える
- [ ] awsにデプロイする
- [ ] cdk cloudFormation

3/4
- [x] turbo run を導入して、pnpm devで一括で実行できるようにする

2/11
- [x] vitestを導入する
- [x] vitestで適当に何かテストを書く
- [x] githab actions で push時に ciで自動テスト
- [x] wsl上でdockerを動かせるようにはしたが、（↓のようにdockerfileは書き方がわからん）
- [ ] アプリをdockerでも動かせるようにする
  - pnpmをdockerでやるのがめんどくさいっぽい？よくわからん
  - 今はやらないでおく

2025/02/07時点
- フロントエンドから、graphqlを呼びだし、Userのcreateとindexができる。
- pandacssが使用できるようになっている
graphqqlクライアントとして、apploClientを使用しているが、会社ではgraphql requestを使用している。（ただ、graphqlrequestが一般的に良いかはわからない）
今のところは正常に動いていて、挫折でストップしているわけではない。

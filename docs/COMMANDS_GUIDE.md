# 開発コマンドガイド

`settings.json`内の`script`にコマンドを定義し、開発がスムーズに進むようにした。

### Docker関連

  - Dockerの立ち上げ
    ```
    npm run docker:start
    ```
  
  - Dockerの終了
    ```
    npm run docker:stop
    ```

### Firebaseのデプロイ

  - `dev`ブランチを`main`ブランチににマージし、`main`ブランチをFirebaseにデプロイ（CI/CD）

    ※ どのブランチでコマンドを打っても動作する。現在の作業はそのブランチにスタッシュされる。

    ```
    npm run deploy
    ```

  - Firestoreのルールのみをデプロイ
    ```
    npm run deploy:firestore:rules
    ```

### Seed関連

  - Seedの作成
    ```
    npm run make:seed
    ```

### Git関連

  - ローカルのブランチでリモートに存在しないものを削除
    ```
    npm run del:local:branch
    ```


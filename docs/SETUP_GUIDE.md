# セットアップガイド

1. #### リポジトリのクローン
   
   自分のパソコンの任意のフォルダで以下のコマンドを実行し、クローン
   ```
   git clone https://github.com/team-lychee-tea/rental-app.git
   ```
 1. #### VS Codeに拡張機能を導入

    Dev Containersという拡張機能をインストール
    
    <img src="https://github.com/team-lychee-tea/rental-app/assets/134689144/4d15502b-a0cc-4f48-a59c-436e1b5c216e" width=600>

  1. #### .envファイルを配置

     VS Codeでクローンしたフォルダ「rental-app」を開く。


     [GoogleドライブのRental Appフォルダ](https://drive.google.com/drive/folders/1goNzDbFLeeUnFS8euaE5ZFmcrgxXuINQ)から`.env`ファイルをダウンロードし、プロジェクト直下に配置

     ダウンロードしたときにフィアル名が変更されることがあるので、`.env`になっていることを確認！

 1. #### コンテナの立ち上げおよびコンテナへの入室

    VS Codeでクローンしたフォルダ「rental-app」を開いた状態であることを確認。

    VS Code画面左下の青いアイコンをクリック。

    画面に選択肢が出てくるので、「コンテナで再度開く」をクリック


  1. #### firebaseにログイン

     以下のコマンドを実行し、firebaseにログイン。
     

     ```
     firebase login --no-localhost
     ```

     ブラウザが自動的に開き、アカウントを選択するように言われるので、プロジェクトで共有しているGoogleアカウントを選択。

     ブラウザからキーをコピーし、VS Codeに入力。
     

  1. #### セットアップ完了の確認

     http://localhost:5173/ でメインの画面が見れるか
     
     http://localhost:4000/ でFirebase Emulator Suiteが見れるか


# 毎回の開発でやること

1. VS Codeでプロジェクトのフォルダ（rental-app）を開く。
2. VS Codeの画面右下に「コンテナーで再度開く」のボタンが出てくるので押す

   Dockerの立ち上げ完了、および入室完了！
   
4. 開発を終わるときは、VS Codeの画面左下の青い部分を押すと選択肢が出てくるので「ローカルで再度開く」を押すとDockerが止まる。

    

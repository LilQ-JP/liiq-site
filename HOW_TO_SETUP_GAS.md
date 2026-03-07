# 💌 サイトのお問い合わせを無料で受信する設定手順（Google Apps Script）

この手順を行うことで、LilQのサイトからの「相談・依頼フォーム」と「お問い合わせフォーム」の内容が、ご自身のメールアドレス宛に届くようになります。
Formspreeなどの外部サービスは使わず、Googleアカウントがあれば**永久に完全無料**で利用できます。所要時間は約5分です。

## ステップ1：プログラムを作成する
1. パソコンのブラウザでご自身のGoogleアカウントにログインした状態で、[Google Apps Script](https://script.google.com/home) を開きます。
2. 左上の「**新しいプロジェクト**」をクリックします。
3. エディタ画面（タイトルが「無題のプロジェクト」となっている画面）が開いたら、そこに入っている短い文字（`function myFunction() { ...`）を**すべて消し**、代わりに以下のコードをコピーして貼り付けてください。

```javascript
function doPost(e) {
  var type = e.parameter.type || "contact";
  var name = e.parameter.name || "未入力";
  var email = e.parameter.email || "未入力";
  var sns = e.parameter.sns || "未入力";
  var serviceType = e.parameter.serviceType || "未入力";
  var streamUrl = e.parameter.streamUrl || "未入力";
  var message = e.parameter.message || "未入力";

  // ↓ メールの受け取り先アドレスを指定します（現在のGoogleアカウントのメールアドレスになります）
  var recipient = Session.getActiveUser().getEmail(); 
  // ※ もし別のメールアドレスで受け取りたい場合は、以下のように書き換えてください。
  // var recipient = "youremail@example.com";

  var subject = "";
  var body = "";

  if (type === "apply") {
    subject = "【LilQ】新規のお申し込みがありました（" + name + "様）";
    body = "以下の内容でお申し込みがありました。\n\n" +
           "■ お名前\n" + name + "\n\n" +
           "■ メールアドレス\n" + email + "\n\n" +
           "■ X (旧Twitter) リンク\n" + sns + "\n\n" +
           "■ ご希望のプラン\n" + serviceType + "\n\n" +
           "■ 配信URL\n" + streamUrl + "\n\n" +
           "■ ご要望・詳細\n" + message + "\n\n" +
           "-------------------------------------\n" +
           "※素材動画がある場合は、別途Googleフォームにもアップロードされているか確認してください。";
  } else {
    subject = "【LilQ】新規のお問い合わせがありました（" + name + "様）";
    body = "以下の内容でお問い合わせがありました。\n\n" +
           "■ お名前\n" + name + "\n\n" +
           "■ メールアドレス\n" + email + "\n\n" +
           "■ お問い合わせ内容\n" + message;
  }

  // メール送信
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: body,
    replyTo: email
  });

  // ブラウザに成功の信号を返す
  return ContentService.createTextOutput("Success");
}
```

4. 貼り付けたら、画面上部のフロッピーディスクのアイコン（プロジェクトを保存）をクリックします。

## ステップ2：プログラムを公開（デプロイ）する
1. 画面右上の青いボタン「**デプロイ**」をクリックし、「**新しいデプロイ**」を選びます。
2. 「種類の選択」の横にある歯車アイコン(⚙)をクリックし、「**ウェブアプリ**」を選択します。
3. 以下の通りに設定してください：
   - アクセスできるユーザー: 「**全員**」 ← ⚠️これが一番重要です！
   - ※「次のユーザーとして実行」は「自分」のままでOKです。
4. 設定したら右下の「**デプロイ**」をクリックします。
5. （初回のみ）「アクセスを承認」という画面が出ます。
   - 自分のGoogleアカウントをクリック
   - 「このアプリは Google で確認されていません」と出たら、左下の「**詳細を表示**」をクリック
   - 一番下の「**無題のプロジェクト（安全ではないページ）に移動**」をクリックして「許可」します。
6. デプロイが完了すると「デプロイ ID」と「**ウェブアプリの URL**」が表示されます。
   - 「ウェブアプリの URL」の下にある「**コピー**」ボタンを押してURLをコピーしてください。（例: `https://script.google.com/macros/s/AKfyc.../exec`）

## ステップ3：サイトにURLを貼り付ける
1. LilQプロジェクトのフォルダ内にある **`.env.local`** ファイルをVSCodeで開きます。
2. `NEXT_PUBLIC_GAS_URL=` の右側に、先ほどコピーしたURLをそのまま貼り付けます。
   ```env
   NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/xxxxxxxxxxxxx/exec
   ```
3. 保存（Ctrl+S または Cmd+S）します。
4. 動いているローカルサーバー（`npm run dev`）を再起動して完了です！

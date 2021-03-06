# Hello Nest JS
Learning Nest JS 

![Hello NestJS](/images/nest-learn.png)

ဒီနေရာမှာတော့ Nest JS Application တစ်ခုကို ဘယ်လို ရေးသားရမယ်ဆိုတာကို လေ့လာသွားကြပါမယ်။ 

1. Nest JS Project တစ်ခုကို ဘယ်လိုတည်ဆောက်မလဲ
2. Project ရဲ့ ဖွဲ့စည်းတည်ဆောက်ပုံက ဘယ်လိုလဲ
3. ဘာတွေကို ဆက်ပြီးလေ့လာရမလဲ

## Create First Nest JS Project

အသုံးပြုသွားမည့် Tools တွေကတော့ အောက်ပါအတိုင်းဖြစ်ပါတယ်။
1. npm
2. yarn
3. nest-cli 

nest-cli ကို Install လုပ်ပြီးရင် Nest JS Project တစ်ခုကို Command နဲ့ Create လုပ်နိုင်မှာ ဖြစ်ပါတယ်။

```
nest new hello-nest
```

အထက်ပါအတိုင်း CMD မှာ Execute လုပ်လိုက်ရင် နောက်တစ်ဆင့်မေးလာမှာက Package Manager အနေနဲ့ NPM ကို သုံးမှာလား Yarn ကို သုံးမှာလားပဲ ဖြစ်ပါတယ်။
![Select Pacakage Manager](https://scontent.fmdl2-1.fna.fbcdn.net/v/t1.0-9/s960x960/84930485_10221483407898781_4983462579457228800_o.jpg?_nc_cat=109&_nc_eui2=AeE-w0YUFOUtPEtqhSxzuxDeyiC-iFeaWOFBAvqtMMysSOVZ3VFEwV92o2oDofLwqtSfmSAkaTTOG7bIjXR5Q6UqQrabgQvytAAhO8DOD89rWw&_nc_oc=AQkXrPfbbnEKQ_cXe2HcGjjddNUCKOx7phSiYgZ37JeL3DDq4B3DDoEv1gndmxz7NnA&_nc_ht=scontent.fmdl2-1.fna&oh=c68d6ed7ae55bfcdfd38a3e88c3d3c32&oe=5EC87367)

မိမိနှစ်သက်ရာ Package Manager ကို Arrow Key နဲ့ ရွေးချယ်ပြီး Enter Key ကို နှိပ်လိုက်ရင် ရွေးချယ်ထားတဲ့ Package Manager နဲ့ Nest JS Project templage ကို တည်ဆောက်ပေးသွားမှာ ဖြစ်ပါတယ်။ ဒီနေရာမှာတော့ Yarn ကို အသုံးပြုသွားပါတယ်။
![OK](https://scontent.fmdl2-2.fna.fbcdn.net/v/t1.0-9/84636471_10221483518781553_4353059889774329856_o.jpg?_nc_cat=111&_nc_eui2=AeHZoCXA6FqLdsUDOUuFkybqTf13AhdHeXQRL7p9dUnbxtT5XBWFbmwcG2oIW9gZJNJhHGSqVl5NGnxJv3M9fDjB-oIMqRc8BtawjESWpu9rfw&_nc_oc=AQmoOG46_x6XKy8tUq0rcXikBUWZhsbwd7qv76iZC3frx4eA6X_xTd8feJVHO2EyfBg&_nc_ht=scontent.fmdl2-2.fna&oh=07cf138c227361a6f7a2cf0ea6620372&oe=5EC07A17)

အထက်ပါပုံအတိုင်း Project ကို တည်ဆောက်တာ အောင်မြင်သွားပြီဆိုရင် Nest JS Project လေးတစ်ခုကို တည်ဆောက်လို့ ပြီးသွားပြီဖြစ်ပါတယ်။ သတိထားရမှာက Yarn ကိုသုံးချင်တယ်ဆိုရင် Yarn ကို ကြိုပြီး Install လုပ်ထားဖို့ လိုအပ်ပါတယ်။ Package Manager အနေနဲ့ NPM ကို အသုံးပြုမယ်ဆိုရင်လဲ ပြဿနာရှိမှာ မဟုတ်ပါဘူး။

Nest JS Project ကို Create လုပ်ပြီံးတဲ့ အခါမှာ အထက်ဖေါ်ပြပါအတိုင်း Project Root Folder ထဲကို သွားပြီး ရေးထားတဲ့ Start လုပ်ပေးဖို့ပါပဲ။ အသုံးပြုရမည့် Command တွေကတော့ အောက်ပါအတိုင်ဖြစ်ပါတယ်။

```
cd hello-nest
yarn run start
```
မှန်မှန်ကန်ကန် အလုပ်လုပ်သွားတယ်ဆိုရင် အောက်ပါအတိုင်း Console မှာ ဖေါ်ပြပေးမှာ ဖြစ်ပါတယ်။ ပြီးတော့ http://localhost:3000/ မှာ အလုပ်လုပ်နေတယ်ဆိုတာကို ကြည့်ရှုနိုင်မှာ ဖြစ်ပါတယ်။ 

အသေးစိတ်ကိုတော့ [SE01-EP01 Hello Nest](https://www.youtube.com/watch?v=xwIk3PYJkZg&t=3s) မှာ လေ့လာနိုင်မှာ ဖြစ်ပါတယ်။


## Basic Structure of Nest JS Project

Nest CLI နဲ့ ပရိုဂျက်တစ်ခုကို တည်ဆောက်ပြီးပြီဆိုရင် အောက်ပါအတိုင်း File တွေ Folder တွေကို တည်ဆောက်ပေးမှာဖြစ်ပါတယ်။ 

![Project Structure](/images/nest-project-structure.png)

အထက်ဖေါ်ပြပါအတိုင်း Nest CLI နဲ့ Project အသစ်တစ်ခုကို တည်ဆောက်လိုက်ရင် Project အတွက် Setting Files တွေနဲ့ folder တွေကို တည်ဆောက်ပေးမှာ ဖြစ်ပါတယ်။

| Folder | Description |
| --- | --- |
| dist | Compile လုပ်ပြီးရလာတဲ့ JS File တွေအတွက် Folder ဖြစ်ပါတယ် |
| node_modules | Project မှာ လိုအပ်တဲ့ Node Modules Dependency တွေကို သိမ်းပေးထားမည့် Folder ဖြစ်ပါတယ်။ လိုအပ်လာလို့ Package Manager နဲ့ Install လုပ်ထားတဲ့ Dependency တွေလဲ ဒီ Folder အောက်မှာ လာပြီး သိမ်းထားပေးမှာ ဖြစ်ပါတယ် |
| src | အပလီကေးရှင်းထဲမှာ ရေးသားရမည့် Source Code တွေကို ဒီနေေရာမှာ ရေးသာားရမှာ ဖြစ်ပါတယ် |
| test | Test Code တွေကို ဒီမှာ ရေးသားရမှာ ဖြစ်ပါတယ် |

Nest JS ရဲ့ Project Structure နဲ့ ပတ်သက်တဲ့ Video ရှင်းလင်းချက်ကို [SE01-EP02 roject Structure and Next](https://www.youtube.com/watch?v=pUwgyLCZZvo&feature=youtu.be) မှာ လေ့လာနိုင်ပါတယ်။

## What we have to learn next?

ဟုတ်ပါတယ်။ 
Hello World ကို ရေးနိုင်ဖို့ဟာ အခြေခံ လိုအပ်ချက်ဖြစ်ပါတယ်။ 
Hello World ကို ရေးပြီးသွားရင် ဘာဆက်လုပ်မလဲ၊ ပြီးတော့ ဘယ်လို ဆက်လုပ်မလဲ ဆိုတာကို စဉ်းစားရမှာ ဖြစ်ပါတယ်။ 

ဒီနေရာမှာ ပုံစံ နှစ်မျိုးရှိနိုင်ပါတယ်။ 

1. Type Script ပြီးတော့ Nest JS ကို အစအဆုံး သေသေချာချာ သဘောပေါက်အောင် လေ့လာတဲ့ ပုံစံ
2. မိမိရေးလိုတဲ့ Application တစ်ခုကို အမြန်ရေးနိုင်အောင် ဘာတွေလိုမလဲ ဆိုတာကို ရွေးပြီး လေ့လာတဲ့ ပုံစံ

ဒီနေရာမှာတော့ Application တစ်ခုကို ရေးသားဖို့ ဘာတွေလိုမလဲ ဆိုတာကို ရွေးပြီး လေ့လာသွားပါမယ်။

### Handling Request
Http Request တွေကို ဘယ်လို Handle လုပ်မလဲ၊ ပြီးတော့ Request ထဲက အချက်အလက်တွေကို ဘယ်လို ထုတ်ယူမလဲ၊ Response ထဲကို Data တွေကို ဘယ်လို ပေးရမလဲ အစရှိတာတွေကို လေ့လာသွားပါမယ်။

### Dependency Injection
Dependency Injection ဟာ Component တွေရဲ့ Coupling ကို လျော့ချပေးနိုင်တဲ့ နည်းလမ်းတစ်ခုဖြစ်တယ်။ Nest Container ဟာ Dependency Injection ကို အခြေခံထားပါတယ်။ NestJS ပတ်ဝင်းကျင်မှာ Dependency Injection ကို ဘယ်လို သုံးမလဲ ဆိုတာကို လေ့လာသွားပါမယ်။

### Accessing Database
Application တစ်ခုမှာ Database ဟာ မဖြစ်မနေလိုအပ်ပါတယ်။ ဒီနေရာမှာတော့ Nest JS နဲ့ Database ကိုဘယ်လို တွဲပြီးအသုံးပြုမယ်ဆိုတာကို လေ့လာသွားပါမယ်။

### Data Validation
Data Validation ကို NestJS ပတ်ဝင်းကျင်မှာ ဘယ်လို ရေးရမယ် ဆိုတာကို လေ့လာသွားပါမယ်။

### Security
Application တစ်ခုမှာ Security ဟာ မဖြစ်မနေလိုအပ်ပါတယ်။ ဒီနေရာမှာတော့ Nest JS နဲ့ ရေးသားထားတဲ့ RESt API ကို ဘယ်လို Secure ဖြစ်အောင် ရေးသားရမလဲ ဆိုတာကို လေ့လာသွားပါမယ်။

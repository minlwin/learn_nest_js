# Hello Nest JS
Learning Nest JS 

ဒီနေရာမှာတော့ Nest JS Application တစ်ခုကို ဘယ်လို ရေးသားရမယ်ဆိုတာကို လေ့လာသွားကြပါမယ်။ 

1. Nest JS Project တစ်ခုကို ဘယ်လိုတည်ဆောက်မလဲ
2. Project ရဲ့ ဖွဲ့စည်းတည်ဆောက်ပုံက ဘယ်လိုလဲ
3. ဘာတွေကို ဆက်ပြီးလေ့လာရမလဲ

## Create First Nest JS Project

အသုံးပြုသွားမည့် Tools တွေကတော့ အောက်ပါအတိုင်းဖြစ်ပါတယ်။
1. npm
2. yarn
3. nest-cli 

အထက်ပါ Tools တွေကို Install လုပ်ပြီးတဲ့ နောက်မှာ nest cli Tools ကို အသုံးပြုပြီး Nest JS Project တစ်ခုကို တည်ဆောက်ပုံ ပြီးတော့ ရေးသားထားတဲ့ ပရိုဂျက်ကို Run ကြည့်ပုံတို့ကို အောက်ပါ Youtube Video မှာ လေ့လာနိုင်မှာ ဖြစ်ပါတယ်။

[![ဘယ်လို စပြီး ပရိုဂျက်ကို တည်ဆောက်မှာလဲ](https://scontent.fmdl2-2.fna.fbcdn.net/v/t1.0-9/85181633_10221484113756427_6146191139373318144_o.jpg?_nc_cat=110&_nc_eui2=AeHQiQ6M3qpwVdKKzlLWImtIPArlMbqJwtYzvlacOZbW8Cif8sCU9df8OxxHILEQXp0IKjwyLx_vBaLHWAYCW56fWRPGmZvHRLPGZWwn6Pezvw&_nc_oc=AQkek8_IkMDaiBEfwebqlGmc_A3r-TY14yJ9a6rF4RkKWA0m5rWeRJRMtF5DZyYRdmg&_nc_ht=scontent.fmdl2-2.fna&oh=c47a037dbacae9b39bb37d9367123226&oe=5EB59E08)](https://www.youtube.com/watch?v=xwIk3PYJkZg)

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

## Basic Structure of Nest JS Project


## What we have to learn next?




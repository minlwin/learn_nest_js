# Handling Request
![Cover Image](/images/nest-learn-2.png)

NestJS Framework ဟာ HTTP Request တွေကို Handle လုပ်ဖို့ Controller တွေကို အသုံးပြုပါတယ်။ ဒီနေရာမှာတော့ အောက်ပါအကြောင်းအရာကို အဓိကထားပြီး လေ့လာသွားမှာ ဖြစ်တယ်။

1. Controller ဆိုတာဘာလဲ
2. Request တွေနဲဲ့ Controller Method တွေကို ဘယ်လို Map လုပ်တာလဲ
3. Client ဆီကနေ ပေးလာတဲ့ Information တွေကို ဘယ်လို ရယူနိုင်သလဲ
4. ဘာတွေကို Response လုပ်နိုင်သလဲ

## Controller ဆိုတာဘာလဲ

![Controller](https://github.com/minlwin/the-restaurant/raw/master/images/type2mvc.png)

Controller ဆိုတာက NestJS ရဲ့ အခြေခံ Component တစ်မျိုးဖြစ်ပြီး၊ Request တွေကို Handle လုပ်ပြီး Response တွေကို တည်ဆောက်ပေးဖို့အတွက် တာဝန်ရှိပါတယ်။ Client ဆီကနေ ရောက်လာတဲ့ HTTP Request တွေဟာ Nest Container ဆီကို ရောက်လာပြီဆိုတာနဲ့ Nest ရဲ့ Routing Mechanism ကနေ HTTP Protocol ရဲ့ URL Path နဲ့ Request Method ကိုကြည့်ပြီး ဘယ် Controller ရဲ့ ဘယ် Method ကို Invoke လုပ်ရမယ်ဆိုတာကို ဆုံးဖြတ်ပါတယ်။

Handle လုပ်မည့် Controller Method ကို တွေ့ပြီဆိုတာနဲ့ အဲ့ဒီ Method ကို Invoke လုပ်ပါတယ်။ တဖန် အဲ့ဒီ Method ကို Invoke လုပ်ပြီး ရလာတဲ့ Result Object ကိို အသုံးပြုပြီး HTTP Response ကို Client ဆီကို ပြန်ပေးပါတယ်။

တကယ်လို့ Handle လုပ်မည့် Controller Method ကို မတွေ့ပါက HTTP Status 404 နဲ့ Error Object ကို Response လုပ်မှာ ဖြစ်ပါတယ်။

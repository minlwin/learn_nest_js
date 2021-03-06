# Handling Request
![Cover Image](/images/nest-learn-2.png)

NestJS Framework ဟာ HTTP Request တွေကို Handle လုပ်ဖို့ Controller တွေကို အသုံးပြုပါတယ်။ ဒီနေရာမှာတော့ အောက်ပါအကြောင်းအရာကို အဓိကထားပြီး လေ့လာသွားမှာ ဖြစ်တယ်။

1. Controller ဆိုတာဘာလဲ
2. Request တွေနဲဲ့ Controller Method တွေကို ဘယ်လို Map လုပ်တာလဲ
3. Client ဆီကနေ ပေးလာတဲ့ Information တွေကို ဘယ်လို ရယူနိုင်သလဲ
4. ဘာတွေကို Response လုပ်နိုင်သလဲ

## Controller ဆိုတာဘာလဲ

Controller ဆိုတာက NestJS ရဲ့ အခြေခံ Component တစ်မျိုးဖြစ်ပြီး၊ Request တွေကို Handle လုပ်ပြီး Response တွေကို တည်ဆောက်ပေးဖို့အတွက် တာဝန်ရှိပါတယ်။ Client ဆီကနေ ရောက်လာတဲ့ HTTP Request တွေဟာ Nest Container ဆီကို ရောက်လာပြီဆိုတာနဲ့ Nest ရဲ့ Routing Mechanism ကနေ HTTP Protocol ရဲ့ URL Path နဲ့ Request Method ကိုကြည့်ပြီး ဘယ် Controller ရဲ့ ဘယ် Method ကို Invoke လုပ်ရမယ်ဆိုတာကို ဆုံးဖြတ်ပါတယ်။

Handle လုပ်မည့် Controller Method ကို တွေ့ပြီဆိုတာနဲ့ အဲ့ဒီ Method ကို Invoke လုပ်ပါတယ်။ တဖန် အဲ့ဒီ Method ကို Invoke လုပ်ပြီး ရလာတဲ့ Result Object ကိို အသုံးပြုပြီး HTTP Response ကို Client ဆီကို ပြန်ပေးပါတယ်။

တကယ်လို့ Handle လုပ်မည့် Controller Method ကို မတွေ့ပါက HTTP Status 404 နဲ့ Error Object ကို Response လုပ်မှာ ဖြစ်ပါတယ်။

![Controller](https://github.com/minlwin/the-restaurant/raw/master/images/type2mvc.png)

Video Tutorial ကိုတော့ [SE02-EP01 About Controller](https://www.youtube.com/watch?v=B7RUXUK7-aY&t=29s) မှာလေ့လာနိုင်မှာ ဖြစ်ပါတယ်။

### Basic Structure of A Controller

```typescript
@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "Hello World";
  }
}
```
Controller တစ်ခုကို ရေးသားမယ်ဆိုရင် @Controller() Decorator ကိုအသုံးပြုရေးသားရန်လိုအပ်ပါတယ်။ Controller ထဲမှာလဲ Request Method အလိုက် Handle လုပ်စေလိုတဲ့ Method တွေကို ရေးသားထားနိုင်ပါတယ်။

```typescript
@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
```
Controller ကိုအသုံးပြုမည့် Module ထဲမှာ controllers အနေနဲ့ သတ်မှတ်ထားဖို့လိုအပ်ပါတယ်။


### How To Create A Controller

Controller ကို တည်ဆောက်တဲ့ နေရာမှာ အထက်ပါအတိုင်း Controller Class ကို Create လုပ်ပြီးတော့ Module ထဲမှာ Define လုပ်ပြီး ရေးသားနိုင်ပါတယ်။ တဖန် Nest CLI Tools ကို Install လုပ်ထားတယ်ဆိုရင် generate Command ကိုအသုံးပြုပြီးလဲ တည်ဆောက်နိုင်ပါတယ်။

```shell
$ nest generate controller hello
$ nest g controller hello
$ nest g co hello
```

အထက်ပါ Command တစ်ခုခုကို Run ပြီး Hello Controller ကိုတည်ဆောက်နိုင်ပါတယ်။ 

#### Hello Controller Class
```typescript
@Controller('hello')
export class HelloController {
    
}
```

#### App Module
```typescript
@Module({
  imports: [],
  controllers: [AppController, HelloController],
  providers: [],
})
export class AppModule {}
```

[Nest CLI Command Reference](https://docs.nestjs.com/cli/usages) မှာ CLI ရဲ့ အသုံးပြုပုံ အသေးစိတ်ကို လေ့လာနိုင်ပါတယ်။

Video Tutorial ကိုတော့ [SE02-EP02 How to Create A Controller](https://www.youtube.com/watch?v=EIAq-UoAkOY) မှာလေ့လာနိုင်မှာ ဖြစ်ပါတယ်။

## Request Mapping

Nest Container ရဲ့ Routing Mechanism ဟာ HTTP Request Protocol ရဲ့ URL နဲ့ Request Method ကို အသုံးပြုပြီး Invoke လုပ်ရမည့် Controller Method ကို ရှာဖွေပါတယ်။ ဒါ့ကြောင့် Controller တွေကို ရေးသားတဲ့ နေရာမှာ Method တစ်ခုဟာ ဘယ်လို URL ရဲ့ ဘယ်လို Request Method အတွက်လဲ ဆိုတာကို Decorator တွေကို အသုံးပြုပြီး Map လုပ်ပေးထားဖို့လိုအပ်ပါတယ်။

### Class Level Decorators

| Decorator | Arguments | Description |
| --- | --- | --- |
| @Controller | No Argument | Application Root Path နဲ့ Map လုပ်ပေးပါမယ် |
| @Controller | 'hello' | prefix ရဲ့ Value ကို 'hello' လို့သတ်မှတ်ထားရင် '/hello' နဲ့ Map လုပ်ပေးပါမယ် |
| @Controller | {path : '/hello' , host : 'admin.jdc.com'} | Host နဲ့ Path ကို သတ်မှတ်လိုတဲ့ အခါမျိုးမှာ အသုံးပြုနိုင်ပါတယ်။ |

### Method Level Decorator

| Decorator | Arguments | Description |
| --- | --- | --- |
| Get() | string or string[] | GET Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Post() | string or string[] | POST Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Put() | string or string[] | PUt Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Delete() | string or string[] | DELETE Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Head() | string or string[] | HEAD Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Patch() | string or string[] | PATCH Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| Options() | string or string[] | OPTIONS Http Request Method နဲ့လာတဲ့ Request တွေနဲ့ Map လုပ်ပေးပါတယ် |
| All() | string or string[] | Http Request Method အားလုံးနဲ့ Map လုပ်ပေးပါတယ် |




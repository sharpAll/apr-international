import Vue from "vue";
import VueRouter from "vue-router";
//布局组件
import Layout from "@/components/Layout.vue";
//首页
import CHHome from "@/views/CH/home";
//关于我们
import CHAboutUs from "@/views/CH/aboutUs";
//联系我们
import CHContactUs from "@/views/CH/aboutUs/contact";
//服务范畴
import CHRange from "@/views/CH/range";
//服务内容与流程
import CHService from "@/views/CH/service";
//愿景
import CHVision from "@/views/CH/vision";
//行业
import CHTrade from "@/views/CH/trade";
//客户
import CHCustom from "@/views/CH/custom";
//评价
import CHEvaluate from "@/views/CH/custom/evaluate";
/****************英文 ***********/
//首页
import ENHome from "@/views/EN/home";
//关于我们
import ENAboutUs from "@/views/EN/aboutUs";
//联系我们
import ENContactUs from "@/views/EN/aboutUs/contact";
//服务范畴
import ENRange from "@/views/EN/range";
//服务内容与流程
import ENService from "@/views/EN/service";
//愿景
import ENVision from "@/views/EN/vision";
//行业
import ENTrade from "@/views/EN/trade";
//客户
import ENCustom from "@/views/EN/custom";
//评价
import ENEvaluate from "@/views/EN/custom/evaluate";
/******* 法文 *********/

//首页
import FRHome from "@/views/FR/home";
//关于我们
import FRAboutUs from "@/views/FR/aboutUs";
//联系我们
import FRContactUs from "@/views/FR/aboutUs/contact";
//服务范畴
import FRRange from "@/views/FR/range";
//服务内容与流程
import FRService from "@/views/FR/service";
//愿景
import FRVision from "@/views/FR/vision";
//行业
import FRTrade from "@/views/FR/trade";
//客户
import FRCustom from "@/views/FR/custom";
//评价
import FREvaluate from "@/views/FR/custom/evaluate";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "CH/home",
    children: [
      {
        path: "CH/home",
        component: CHHome,
        name: "CH/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "CH/aboutUs/:type",
        component: CHAboutUs,
        name: "CH/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "CH/aboutUs/contactUs",
        component: CHContactUs,
        name: "CH/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "CH/range",
        component: CHRange,
        name: "CH/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "CH/service",
        component: CHService,
        name: "CH/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "CH/vision",
        component: CHVision,
        name: "CH/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "CH/trade",
        component: CHTrade,
        name: "CH/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "CH/custom",
        component: CHCustom,
        name: "CH/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "CH/custom/evaluate",
        component: CHEvaluate,
        name: "CH/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      },
      // 英文
      {
        path: "EN/home",
        component: ENHome,
        name: "EN/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "EN/aboutUs",
        component: ENAboutUs,
        name: "EN/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "EN/aboutUs/contactUs",
        component: ENContactUs,
        name: "EN/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "EN/range",
        component: ENRange,
        name: "EN/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "EN/service",
        component: ENService,
        name: "EN/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "EN/vision",
        component: ENVision,
        name: "EN/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "EN/trade",
        component: ENTrade,
        name: "EN/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "EN/custom",
        component: ENCustom,
        name: "EN/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "EN/custom/evaluate",
        component: ENEvaluate,
        name: "EN/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      },
      //法语
      {
        path: "FR/home",
        component: FRHome,
        name: "FR/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "FR/aboutUs",
        component: FRAboutUs,
        name: "FR/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "FR/aboutUs/contactUs",
        component: FRContactUs,
        name: "FR/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "FR/range",
        component: FRRange,
        name: "FR/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "FR/service",
        component: FRService,
        name: "FR/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "FR/vision",
        component: FRVision,
        name: "FR/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "FR/trade",
        component: FRTrade,
        name: "FR/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "FR/custom",
        component: FRCustom,
        name: "FR/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "FR/custom/evaluate",
        component: FREvaluate,
        name: "FR/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "cur"
});

export default router;

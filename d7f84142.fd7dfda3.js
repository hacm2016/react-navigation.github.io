(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(9),o=(a(0),a(468)),r={id:"limitations",title:"Limitations",sidebar_label:"Limitations"},s={id:"version-4.x/limitations",title:"Limitations",description:"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt [a different library instead](alternatives.md). We discuss the high level design decisions in the [pitch & anti-pitch](pitch.md) section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you.",source:"@site/versioned_docs/version-4.x/limitations.md",permalink:"/docs/4.x/limitations",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/limitations.md",version:"4.x",sidebar_label:"Limitations",sidebar:"version-4.x-docs",previous:{title:"Troubleshooting",permalink:"/docs/4.x/troubleshooting"},next:{title:"Tab navigation",permalink:"/docs/4.x/tab-based-navigation"}},c=[{value:"Dynamic routes",id:"dynamic-routes",children:[]},{value:"iOS 11 style header with large text",id:"ios-11-style-header-with-large-text",children:[]},{value:"Right-to-left (RTL) layout support",id:"right-to-left-rtl-layout-support",children:[]},{value:"Performance limitations",id:"performance-limitations",children:[]},{value:"Nuanced platform-specific behavior",id:"nuanced-platform-specific-behavior",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/alternatives"}),"a different library instead"),". We discuss the high level design decisions in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/pitch"}),"pitch & anti-pitch")," section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you."),Object(o.b)("h2",{id:"dynamic-routes"},"Dynamic routes"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It's not a limitation anymore with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org"}),"React Navigation 5")," which uses a new component based API to be able to support this use case.")),Object(o.b)("p",null,"This one requires a bit of understanding of React Navigation to fully grok."),Object(o.b)("p",null,"React Navigation requires that you define your routes statically, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const FriendsNavigator = createDrawerNavigator({\n  Feed: FeedScreen,\n  FriendList: FriendListScreen,\n});\n\nconst AuthNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  App: FriendsNavigator,\n  Auth: AuthNavigator,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n\nexport default class MyApp extends React.Component {\n  render() {\n    return <AppContainer />;\n  }\n}\n")),Object(o.b)("p",null,"Let's say that when a user signs in to the app, you want to get a list of the user's friends and add a route for each friend in the ",Object(o.b)("inlineCode",{parentName:"p"},"FriendsNavigator"),". This would make it so there is a button with each of their names in the drawer. React Navigation does not currently provide an easy way to do this. React Navigation currently works best in situations where your routes can be defined statically. Keep in mind that this does not mean that you cannot pass arbitrary data to your routes ","\u2014"," you can do this using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/params"}),"params"),"."),Object(o.b)("p",null,"There are workarounds if you absolutely need dynamic routes but you can expect some additional complexity."),Object(o.b)("h2",{id:"ios-11-style-header-with-large-text"},"iOS 11 style header with large text"),Object(o.b)("p",null,"This is on the roadmap to implement, but it's not currently available in the React Navigation. Some folks have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/issues/2749#issuecomment-367516290"}),"gone ahead and built their own version of this"),", but your mileage may vary."),Object(o.b)("h2",{id:"right-to-left-rtl-layout-support"},"Right-to-left (RTL) layout support"),Object(o.b)("p",null,"We try to handle RTL layouts properly in React Navigation, however the team working on React Navigation is fairly small and we do not have the bandwidth or processes at the moment to test all changes against RTL layouts. So you might encounter issues with RTL layouts."),Object(o.b)("p",null,"If you like what React Navigation has to offer but are turned off by this constraint, we encourage you to get involved and take ownership of RTL layout support. Please reach out to us on Twitter: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/reactnavigation"}),"@reactnavigation"),"."),Object(o.b)("h2",{id:"performance-limitations"},"Performance limitations"),Object(o.b)("p",null,"We are able to offload animations to another thread using React Native's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html"}),"Animated native driver"),", but we currently still need to call back into JavaScript for gestures (although there are plans to remedy this in the near future). React Navigation is entirely made up of React components and the state is managed in JavaScript on the same thread as the rest of your app. This is what makes React Navigation great in many ways but it also means that your app logic contends for CPU time with React Navigation ","\u2014"," there's only so much JavaScript execution time available per frame."),Object(o.b)("h2",{id:"nuanced-platform-specific-behavior"},"Nuanced platform-specific behavior"),Object(o.b)("p",null,"React Navigation does not include support for the peek & pop feature available on devices with 3D touch."))}u.isMDXComponent=!0},468:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,b=p["".concat(r,".").concat(h)]||p[h]||d[h]||o;return a?i.a.createElement(b,s({ref:t},l,{components:a})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
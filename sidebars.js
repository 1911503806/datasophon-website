/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
    "概览",
    {
      type: "category",
      label: "Quick Start",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "快速开始" }],
    },
    {
      type: "category",
      label: "Configuration Center",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "使用手册" }],
    },
    {
      type: "category",
      label: "Loader",
      link: {
        type: "generated-index",
        description: "Examples demonstrating the usage of CLI commands.",
      },
      items: [{ type: "autogenerated", dirName: "架构设计" }],
    },
   
    {
      type: "category",
      label: "Release Plan",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "版本计划" }],
    },

    {
      type: "category",
      label: "Dev Guide",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "开发者指南" }],
    },
    "faq",
    "comminicate"
    
    // {
    //   type: "category",
    //   label: "Business Image Construction Process",
    //   link: {
    //     type: "generated-index",
    //   },
    //   items: [{ type: "autogenerated", dirName: "业务镜像构建流程" }],
    // },
    // {
    //   type: "category",
    //   label: "Developers",
    //   items: ["CONTRIBUTING", "DEVELOPGUIDE"],
    // },
    // "标准协议",
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;

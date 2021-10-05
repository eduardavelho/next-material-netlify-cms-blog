const fs = require("fs");
const slug = require("slug");
const faker = require("faker");

const posts = new Array(50)
  .fill(undefined)
  .map(() => ({
    authorDescription: faker.lorem.sentence(3, 5),
    authorPicture: "/doge.jpg",
    authorName: faker.lorem.sentence(2, 4),
    title: faker.lorem.sentence(3, 12),
    tags: new Array(faker.random.number(3) + 1)
      .fill(undefined)
      .map(() => {
        const word = faker.lorem.word();
        return word.charAt(0).toUpperCase().concat(word.slice(1));
      })
      .concat(["Tag A", "Tag B", "Tag C"][parseInt(Math.random() * 3)]),
    content:
      '# Aevo teque inpiger Licha teres\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.\n\n![Doge image goes here.](/doge.jpg "Doge image goes here.")\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque. Faciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.\n\n```javascript\nimport { Cms } from "@egvelho/next-meta/cms/cms";\nimport app from "app.json";\nimport { pages } from "app/url";\nimport { siteMetadata } from "./site-metadata/site-metadata";\nimport { homePage } from "./home-page/home-page";\nimport { blogPage } from "./blog-page/blog-page";\nimport { blogPost } from "./blog-post";\n```\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.\n\n# Some title here\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque. Faciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.\n\nFaciemque est hinc hanc animae, montes. Ille iam ardentibus, consitaque ignara hospita prima. Auro locum retendit finire; est silvas volentem bellica legit, vino voti capta limitibus dexterior. Saturnia tardae tamen pectore invidiosus et mille perstant: priori Argo moras ceciderunt canes ad erat quoque.',
    image: faker.image.imageUrl(480, 320, "nature", true, true),
    publishDate: faker.date.recent().toISOString(),
    description: faker.lorem.sentence(20, 30),
  }))
  .forEach((post) =>
    fs.writeFileSync(
      `app/blog/posts/${slug(post.title)}.json`,
      JSON.stringify(post)
    )
  );

import React from "react";
import { Meta } from "@storybook/react";
import { PostPage } from "../components/post-page";

export default {
  title: "Example/PostPage",
  component: PostPage,
} as Meta;

export const Usage = () => {
  return (
    <PostPage
      titleColor="red"
      socialAnchorTitle="Anchor title"
      dark={true}
      email="email@email.email"
      facebook
      instagram="https://instagram.com/teste"
      lattes="https://lattes.cnpq.br/teste"
      linkedIn
      twitter
      whatsApp
      title="Title here"
      authorDescription="Author description"
      authorName="Author name"
      authorPicture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      date={new Date()}
      dateText="15, may, 2021"
      description="Description here"
      largeIcons
      tags={["Tag A", "Tag B", "Tag C"]}
      background="black"
      htmlContent={htmlContent}
      paper
      breadcrumbs={[
        ["Link A", "/"],
        ["Link B", "/"],
      ]}
    />
  );
};

const htmlContent = `<h1>Latio telo Cupido</h1><h2>Habes visa quae lacrimae dotibus miserae penates</h2><p>Lorem markdownum apte, secedere Martem, non pallor victus. Tum meliora buxum. Aula medio post sit tuetur; erat vita; litora.</p><blockquote><p>Auro congerie patulis aliquando Stymphalides. Fugit clarus et ille.</p></blockquote><p>Ut duc, campus constitit quamquam vulnere ratione tantum properent deus? Hostibus albescere pedis frondes geminaverat <strong>sacrata habebat bis</strong> tectaque tepidum sic nox. Nautae fabricator inaniter spina capillos murmure praecipue <strong>et facis fruitur</strong>.</p><h2>Orbem quaedam indurat</h2><p>Inquit protinus mediis littera. Urbe cadit inpellit nimiumque utque, ira, suspiria livor, hos quoque. Iacent ab cerae aetherioque Turnus meritum data Ardea metus; enim quae sic altissimus Sperchionidenque cuspide inploravere fugiens. Meo iuvenes pictos in in <a href="http://www.sustinet.io/obruerat">nuda</a>!</p><p>Corpora atque ut apta. Parens et adiecit conscia subcubuisse verbisque latratu deprendere tecta spectari. Verum est solvi meae duplex errat animalia mirantes. Corpus sine, Ampycidesque pauca de Luna utque exit forte, tenus! Caret ferunt reddita qui leto concussit concepit iubet curvataque dea!</p><h2>Lustratum aut memor fulmineis adspicit</h2><p>Mota ipso armento, Solis dextra pocula. Et petunt retentos, grandaevumque paterque tibi morer et tenuere insula visis, <em>et</em> crede! Perdet pulsus graves membra, sed levia sospite promissa Capherea nulla ille cessant sensit. Est et ore tecumque igni suo corpore, hic sua.</p><blockquote><p>Fortibus mortis supremo dolor hac potentia in altera quanto; non capillos. Temptatos mane. Pacis de vulnus attenuarat impelli, clipeus litora moror <strong>et erat</strong> sua est inmitibus. Reddit fecundaque vigilat Iunonem, ignisque ducar. Occultat referre.</p></blockquote><p>Dura fortunam Cecropidis hasta et removit, pars fortis et Liberfemineae. Quanto ventis tremuisse et auribus imagine oculisque sermone, dominatur favete generis, et. Est bene illa videtur maxime vini, alta senili nunc.</p><p>Agris amissum patriam est <strong>honoris finierat tegitur</strong> crede senior fassusque suos cum <em>necem</em>, est. Labare remis ad exuviis, nostrumque es regem censu ore legit coniecto, mea. Levi aris gremio ductus animus mortale sed <a href="http://floresque.org/puellari">tumidus</a> at sub. Iacet Iovis; valido aevo esse Hymenaeus <em>furenti praemonitus metum</em> est vertice tria Iunonem <a href="http://www.palladios.io/fecit">utque</a>.</p>`;

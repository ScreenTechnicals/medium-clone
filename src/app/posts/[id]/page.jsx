import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentBox from "@/components/Editor/CommentBox";
import Comment from "@/components/Cards/Comment";

const PostPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="pt-24 px-10">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-[700]">Title</h2>
        <p className="text-gray-700 text-base font-[300]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere
          enim recusandae placeat accusamus voluptas, quaerat nulla, cupiditate
          nostrum suscipit inventore, earum maiores eveniet amet neque facilis
          blanditiis. Eum, aperiam.
        </p>
      </div>
      <div className="flex my-5 items-center gap-1">
        <Image
          src={"/images/img1.png"}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="text-gray-900 font-[300]">Chinmay Sa</span>
        <span className="text-gray-900 font-[300]">Dec 30, 2022</span>
      </div>
      <div className="w-full">
        <Image
          src={"/images/img1.png"}
          alt=""
          width={500}
          height={500}
          className="w-full h-[40vh] object-cover rounded-md object-center"
        />
      </div>
      <div className="mt-5 text-base font-[400]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        quasi voluptate nisi ut doloribus quidem quibusdam magnam et repellat
        rem unde non, sequi dolore magni maxime, est temporibus! Repellendus
        quia veniam eius tempore sapiente placeat nostrum, est blanditiis
        suscipit quod illo rerum consequatur, porro sed adipisci labore autem
        nisi. Dolor mollitia exercitationem doloremque itaque dignissimos,
        repellendus consequatur eveniet iste rem iusto, velit quia! Tempora
        temporibus quas repudiandae obcaecati dolorum sint, vel nisi accusamus
        vitae quo id cupiditate voluptate blanditiis deleniti voluptatum laborum
        error accusantium laudantium, odit reprehenderit voluptatibus pariatur
        nihil fugit. Beatae laborum alias inventore aliquam eum dicta libero
        facere qui quaerat, repellendus eos laudantium enim vel odit autem
        ratione nobis illo eaque, possimus pariatur consequatur ad voluptatum?
        Illum placeat sit possimus! Sed autem aliquid alias ipsa dolorum
        consequuntur nulla possimus praesentium veniam eos itaque ex blanditiis
        fuga facere, voluptas atque est reiciendis libero repudiandae impedit
        neque modi illum nisi? Veritatis modi sed blanditiis quo vitae
        repudiandae, totam quod rerum quasi, ipsum, quae laudantium! Maiores
        laudantium aperiam, doloribus perspiciatis fuga esse at. Earum provident
        praesentium ipsa delectus, saepe sunt quas sapiente quis harum aperiam
        neque quae quia sint? Adipisci similique ex aliquid fugit amet sequi
        quis hic aperiam odit iste quaerat consectetur voluptas eius magni,
        facere sapiente fuga. Enim sequi earum placeat sunt nemo id, eum maxime
        veniam accusantium eos esse hic culpa. Eligendi, vero praesentium
        blanditiis minima aliquid, culpa provident magni dolor, asperiores
        excepturi voluptatibus possimus. At placeat suscipit quos autem maxime
        repellat iure sunt, eligendi quidem, consequuntur quis, voluptatum
        obcaecati. Ipsa similique culpa, maiores nam doloribus ut esse modi
        exercitationem ad repellat veritatis laborum! Quasi molestias minima
        consequuntur et facere autem ipsum nihil ut dolorem explicabo iusto
        assumenda praesentium fuga quas repellendus, voluptatem, necessitatibus
        optio sapiente! Ab illum eligendi placeat, dignissimos, aliquam ratione
        dolor rem atque assumenda explicabo neque error ex saepe necessitatibus
        quidem consequuntur maxime non? Saepe dolorum sapiente excepturi
        perspiciatis pariatur natus nesciunt sint, commodi consectetur
        blanditiis voluptatem? Accusamus pariatur voluptate at deleniti aperiam
        sit. Nemo illo iure in consequatur laborum ad doloribus autem explicabo
        sunt optio voluptatibus iste eum sit, quam aperiam dicta qui esse
        veritatis omnis suscipit ipsa. Corrupti quod aperiam vero, aliquid aut
        amet optio officia vel labore fugit voluptas magni? Molestias, in alias.
        Rem ea cumque ad modi atque? Explicabo facere repellat obcaecati illo,
        cum laborum, itaque iure accusamus perferendis doloremque ullam
        distinctio nesciunt architecto? Dignissimos, quo tenetur possimus
        quibusdam quos eveniet sequi quis pariatur vero itaque velit maiores
        alias, saepe, provident rerum! Excepturi vel error sint accusamus
        tenetur ratione eum eveniet mollitia illo fugit culpa nobis, nam commodi
        assumenda libero est exercitationem perferendis eaque sequi minus
        nesciunt quia facilis. Facilis totam dolorum architecto odit rem sint
        nostrum assumenda pariatur libero! Odio minus eos officia sapiente ut
        vero laborum unde iure! Itaque asperiores, eaque, possimus consectetur
        hic quibusdam amet, exercitationem distinctio veniam blanditiis labore?
        Itaque ex dolorem tempore iusto natus modi perspiciatis nulla non animi.
        Iste nemo eius nostrum reprehenderit fuga magni nisi, quo, tempore ipsam
        voluptatibus suscipit est necessitatibus eos alias laudantium animi
        inventore harum maxime fugiat atque? Veniam nesciunt distinctio, neque
        facilis odio blanditiis laboriosam asperiores quidem? Eveniet temporibus
        hic laudantium autem consectetur aliquid consequuntur quidem, assumenda
        doloremque. Ex fuga amet consectetur suscipit magnam eum facilis
        consequuntur? Aliquid praesentium in maiores possimus ad. Pariatur
        numquam in error natus aliquid quam sit delectus odio? Repellat
        repellendus recusandae sapiente. A harum ad vero odit sunt omnis dolorum
        et quas ducimus perferendis, beatae nihil velit iusto, qui nulla ab.
        Accusantium, commodi. Aut porro id voluptatum corporis dicta autem
        assumenda facilis ex quo tempore maxime, laborum repellat, inventore
        libero veniam dolorem earum deserunt a iure in voluptatibus? Molestias
        consectetur nemo quasi debitis esse perspiciatis nulla! Sapiente
        suscipit accusamus delectus asperiores error autem debitis nemo ducimus
        perferendis in explicabo, omnis tenetur molestiae amet assumenda animi
        quia velit sint porro neque quis odio illum eius. Voluptate perferendis
        numquam adipisci placeat, provident impedit eligendi et quidem. Mollitia
        soluta obcaecati quas esse corrupti quae fugit omnis hic consectetur,
        quisquam, repellendus sed quos doloribus similique laudantium aspernatur
        voluptates molestias nisi quis inventore fugiat. Commodi in possimus aut
        nemo, recusandae ex ipsam sapiente quas sit sunt quaerat minus est eum
        tempora repellat aliquid distinctio esse voluptates harum accusamus,
        dicta, facere modi vitae impedit? Dignissimos incidunt dolores
        consequatur quidem voluptas id quisquam, est similique ex nam maxime
        omnis, eius, eveniet libero deserunt officia quasi. Quasi molestiae
        incidunt saepe, placeat commodi tempore perferendis qui. Similique saepe
        voluptatum adipisci exercitationem? Alias, quasi cupiditate culpa
        commodi officiis, amet nihil vero ullam cum eaque ducimus minus aliquid
        autem sequi eum nobis sapiente, id odio accusamus sit veritatis est esse
        exercitationem asperiores. Numquam quis suscipit sapiente nulla tempora
        qui dicta aliquid aperiam eius! Officiis facere dicta tempora totam
        distinctio rem sed nesciunt atque reprehenderit ducimus, libero, soluta
        ipsam esse architecto autem pariatur expedita inventore amet ullam
        veniam! A quibusdam nesciunt praesentium velit neque suscipit doloremque
        expedita incidunt vero eligendi necessitatibus autem, fugiat perferendis
        aperiam beatae magnam quam rem natus minima voluptatibus! Maiores
        accusantium molestiae modi dolores accusamus totam, culpa illo cum
        illum, quia perferendis. Reprehenderit nisi excepturi nemo ratione
        iusto. Porro nobis eligendi veniam corrupti, debitis, dolor quasi
        voluptatum tempore repellendus minima nemo ratione excepturi blanditiis
        vel? Quia inventore necessitatibus facilis minima iste, eligendi error
        voluptates reprehenderit neque assumenda repellat, ut quos quae nihil
        dolor quis harum blanditiis. Sit voluptates perspiciatis similique, vel
        voluptatibus voluptatum odio nisi quae, provident modi hic distinctio?
        Libero mollitia aliquid saepe ducimus odit, similique repellat
        reprehenderit corrupti iste, quod nesciunt omnis earum, hic assumenda
        nemo ratione nam! Facilis similique beatae magni quidem quae doloremque
        quos dolor eum expedita, ex cumque veniam eveniet quasi ea, explicabo
        reprehenderit recusandae rem omnis dolore nam tempore. Dolores
        cupiditate similique quae officia voluptatem, necessitatibus architecto,
        delectus, dolorem obcaecati minima quasi! Mollitia neque provident qui
        praesentium ut consectetur tempore consequatur ducimus cumque est earum
        voluptate saepe in fugiat aspernatur nostrum natus aliquam, quod fuga
        veritatis aperiam repellendus ipsa. Facere dolorem quod ea quisquam
        minus! Quod sapiente perferendis quam laudantium aliquid, ipsa quo,
        laborum nulla, a doloribus suscipit?
      </div>
      <div className="mt-5 min-h-[30vh]">
        <div>
          <h2 className="text-2xl md:text-4xl font-[600] mb-5">Comments (5)</h2>
          <CommentBox />
        </div>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

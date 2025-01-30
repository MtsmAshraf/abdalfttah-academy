import { StaticImageData } from "next/image";

import image1 from "../../../public/images/user.webp"
import image2 from "../../../public/images/saudi-arabia.png"
import image3 from "../../../public/images/china.png"


export type Testimonial = {
    id: string,
    name: string,
    country: string,
    countryCode: string,
    text: string,
    textAr?: string,
    src: StaticImageData,
    flagSrc: StaticImageData
}


const allTestimonials : Testimonial[] = [
    {
        id: "1",
        name: "Ahmed",
        country: "China",
        countryCode: "CN",
        text: "A Huge Thank You to Mohmed! Taking the RNA-seq course with Mohmed was an incredible experience! His way of teaching made complex concepts easy to grasp, and the knowledge I gained has been truly transformative. Thanks to his guidance, I’m now on the verge of publishing a research paper in this field!",
        textAr: "شكر كبير لمحمد! حضوري لكورس RNA-seq مع محمد كان تجربة مميزة جدًا! أسلوبه في الشرح بسيط وسلس، وخلاني أقدر أفهم مفاهيم معقدة بسهولة. المعرفة اللي اكتسبتها كانت فعلاً نقطة تحول بالنسبة لي، وبفضل توجيهاته ودعمه، أنا دلوقتي على وشك نشر بحث علمي في هذا المجال",
        src: image1,
        flagSrc: image3
    },
    {
        id: "2",
        name: "Refan ",
        country: "Saudi Arabia",
        countryCode: "SA",
        text: "My experience with Dr. Mohmed was truly exceptional and unlike any other courses I’ve taken before. His dedication to ensuring that you genuinely understand the concepts, along with his smooth and engaging teaching style, makes learning effortless and enjoyable. You never feel overwhelmed—on the contrary, every session is an opportunity to explore, expand your knowledge, and be amazed by the rapid advancements in science. His approach encourages curiosity, pushing you to seek more and constantly evolve. I’m beyond grateful for the time I spent learning with him! ❤️",
        textAr: "تجربتي مع محمد كانت فعلاً مختلفة عن أي كورس حضرته قبل كده! أسلوبه في الشرح سهل وسلس، وبيخليك تفهم المعلومة من غير أي تعقيد، كأنك بتتعلم حاجة جديدة وانت مستمتع بيها. مش مجرد شرح نظري، لأ، بيخليك تفكر وتبحث بنفسك، وكل مرة تكتشف حاجات جديدة تخليك منبهر بتطور العلم. طريقته في التدريس مش بس بتوصلك المعلومة، لكن كمان بتخليك متحمس إنك تتعلم أكتر. بجد استفدت جدًا وسعيد بالتجربة ❤️",
        src: image1,
        flagSrc: image2
    }
    // {
    //     id: "3",
    //     name: "John Doe",
    //     country: "Job country",
    //      countryCode: string,
    //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
    //     src: image1,
    //     flagSrc: image2
    // },
    // {
    //     id: "4",
    //     name: "John Doe",
    //     country: "Job country",
    //      countryCode: string,
    //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
    //     src: image1,
    //     flagSrc: image2
    // },
    // {
    //     id: "5",
    //     name: "John Doe",
    //     country: "Job country",
    //      countryCode: string,
    //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
    //     src: image1,
    //     flagSrc: image2
    // },
    // {
    //     id: "6",
    //     name: "John Doe",
    //     country: "Job country",
    //      countryCode: string,
    //     text: "explicabo officia quod est voluptatum adipisci?",
    //     src: image1,
    //     flagSrc: image2
    // }
]

export default allTestimonials;
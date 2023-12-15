import Image from "next/image";
import Link from "next/link";

const Card = ({
  name,
  hrefRoute,
  imageUrl,
}: {
  name: string;
  hrefRoute: string;
  imageUrl: string;
}) => {
  return (
    // <Link href="/coffee/coffee-store/1">
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     {/* <Image className="rounded-t-lg" src="#" alt="Coffee Images" /> */}
    //     <div className="p-5">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {name}
    //       </h5>
    //       <button
    //         type="button"
    //         className="text-white inline-flex items-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    //       >
    //         View more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </Link>
    <Link href={hrefRoute}>
      <div className="max-w-sm mb-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96 flex flex-col justify-between">
        <div className="relative h-48">
          <Image
            className="rounded-t-lg object-cover w-full h-full"
            src={imageUrl}
            alt="Images"
            width={384}
            height={250}
          />
        </div>
        <div className="p-5 flex flex-col items-center">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {name}
          </h5>
          <button
            type="button"
            className="text-white inline-flex items-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            View More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;

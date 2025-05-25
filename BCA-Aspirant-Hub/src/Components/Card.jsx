import React from "react";

function Card({ img, title, des, id, bookLink, noteLink }) {
  const bookHandler = (bookLink) => {
    const confirmed = window.confirm("Are you sure you want to download this book?");
    if (confirmed) {
      const link = document.createElement("a");
      link.href = `/books/${bookLink}.pdf`;
      link.download = `${title}-book.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleClick = (noteLink) => {
    const confirmed = window.confirm("Are you sure you want to download this note?");
    if (confirmed) {
      const link = document.createElement("a");
      link.href = `/notes/${noteLink}.pdf`;
      link.download = `${title}-note.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-blue-400/30 backdrop-blur-lg border border-white/20 w-[350px] h-[520px] rounded-lg shadow-lg p-5 sm:m-1 m-5 flex flex-col gap-5">
      {/* Image Container */}
      <div className="w-full h-[60%] rounded-2xl shadow-md flex justify-center items-center">
        <img className="w-full h-full object-cover rounded-md " src={img} alt="img" />
      </div>

      {/* Title and Description */}
      <div className="w-full h-[20%] flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{des}</p>
      </div>

      {/* Action Buttons */}
      <div className="w-full h-[8%] flex justify-around items-start">
        <button
          onClick={() => bookHandler(bookLink)}
          className="bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md"
        >
          Download Book
        </button>

        <button
          onClick={() => handleClick(noteLink)}
          className="bg-blue-700 text-white w-6/14 h-full sm:w-6/14 sm:h-[95%] rounded-md shadow-md"
        >
          Download Note
        </button>
      </div>
    </div>
  );
}

export default Card;

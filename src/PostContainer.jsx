export function PostContainer({ name, subname, message }) {
  return (
    <div className="post_container bg-neutral-300 text-neutral-800 p-5 rounded-2xl mb-2.5">
      <header className="flex gap-1.5 items-center  mb-2.5 pb-2.5">
        <img
          className="w-5 h-5"
          src="src/assets/avatar_image1.svg"
          alt="Avatar"
        />
        {name} <small>@{subname}</small>
      </header>
      <div className="post_content ">
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
        <figure className="grid grid-cols-2 pb-5">
          <img src="https://xatimg.com/image/BUN2P3ElyvAj.jpg" alt="" />
          <img src="https://xatimg.com/image/cwHxUQrsC6sV.jpg" alt="" />
        </figure>
      </div>
    </div>
  );
}

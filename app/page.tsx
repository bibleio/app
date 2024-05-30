export default function Home() {
  return (
    <div className="flex flex-col py-64 px-256 gap-16">
      <h1 className="h1">Bibleio</h1>
      <p className="body-paragraph">
        Bibleio is an app focused on making The Word accessible, easy to
        understand, and spreading the Gospel.
      </p>
      <h3 className="h3">Beta</h3>
      <p className="body-paragraph">
        This app is still in beta stages. Currently, the base functionality
        (accessing the Bible) and some text formatting is all this does. Next, I
        plan to add a dictionary define system, a command pallete styled search
        function, bookmarks, more themes, an entire page with cool animations
        showing the reasons why you should believe, and more!
      </p>
      <p className="body-paragraph">
        This is 100% free & open-source. Made by dukc.
      </p>
      <div className="flex gap-16">
        <a
          href="/bible"
          className=" bg-light-accent-navy border border-black rounded-12 shadow-accent-component component-hover-effect text-white px-64 py-8"
        >
          Go to the app
        </a>

        <a
          href="https://github.com/bibleio/bibleio"
          target="_blank"
          className=" bg-light-fg-2 border border-black rounded-12 shadow-component component-hover-effect text-black px-64 py-8"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

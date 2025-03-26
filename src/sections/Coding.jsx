import { codingTopics } from '../constants/index.js';

const Coding = () => {
  return (
    <section className="c-space my-20" id="coding">
      <div className="w-full text-white-600">
        <p className="head-text">About Coding</p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {codingTopics.map((topic) => (
            <div key={topic.id} className="work-content_container group">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo">
                  <img className="w-full h-full" src={topic.img} alt={topic.title} />
                </div>
                <div className="work-content_bar" />
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">{topic.title}</p>
                <p className="group-hover:text-white transition-all ease-in-out duration-500">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;

import Animation from '../utils/Animation';

function Style1({
  reverseOrder = false,
  removeBgColor = false,
  title,
  image,
  paragraph,
  l1,
  l2,
  l3,
  l4,
  l5,
}) {
  return (
    <Animation type="1">
      <div
        className={`my-5 grid items-center justify-center gap-5 ${
          removeBgColor ? 'px-5 md:px-7' : 'bg-colorGrey100 shadow-lg'
        } md:grid-cols-2`}
      >
        <div
          className={`p-7 text-left ${
            reverseOrder ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <h1 className="mb-5 text-2xl font-semibold text-colorBrand2">
            {title}
          </h1>

          {paragraph && <p className="mb-3">{paragraph}</p>}

          <Animation type={reverseOrder ? '3' : '2'}>
            <ul>
              {l1 && (
                <li>
                  <span className="pr-2 text-colorBrand2">&#10003;</span>
                  {l1}
                </li>
              )}

              {l2 && (
                <li>
                  <span className="pr-2 text-colorBrand2">&#10003;</span> {l2}
                </li>
              )}

              {l3 && (
                <li>
                  <span className="pr-2 text-colorBrand2">&#10003;</span> {l3}
                </li>
              )}

              {l4 && (
                <li>
                  <span className="pr-2 text-colorBrand2">&#10003;</span> {l4}
                </li>
              )}

              {l5 && (
                <li>
                  {' '}
                  <span className="pr-2 text-colorBrand2">&#10003;</span> {l5}
                </li>
              )}
            </ul>
          </Animation>
        </div>

        <div className={reverseOrder ? 'md:order-1' : 'md:order-2'}>
          <Animation type={reverseOrder ? '2' : '3'}>
            <img
              src={image}
              alt="Image"
              className={`rounded-md px-10 md:mx-auto md:px-0`}
            />
          </Animation>
        </div>
      </div>
    </Animation>
  );
}

export default Style1;

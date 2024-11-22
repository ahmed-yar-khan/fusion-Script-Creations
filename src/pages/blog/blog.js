import { Link } from "react-router-dom"
import gsap from 'gsap';
import { useEffect } from "react";
export const Blog = () => {
    useEffect(() => {
        gsap.from('.blog-content', {
          opacity: 0,
          duration: 1,
          x: -100,
        });
      }, []);
   return( <>
      {/*blog*/}
      <div id="blog">
        <div className="color-changer">
          <div className="color-panel">
            <img src="images/gear.png" alt="" />
          </div>
          <div className="color-selector">
            <div className="heading">Custom Colors</div>
            <div className="colors">
              <ul>
                <li>
                  <Link to="#0" className="color-red " title="color-red" />
                </li>
                <li>
                  <Link to="#0" className="color-purple" title="color-purple" />
                </li>
                <li>
                  <Link to="#0" className="color-malt" title="color-malt" />
                </li>
                <li>
                  <Link to="#0" className="color-green" title="color-green" />
                </li>
                <li>
                  <Link to="#0" className="color-blue" title="color-blue" />
                </li>
                <li>
                  <Link to="#0" className="color-orange" title="color-orange" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-header">
          {" "}
          Blogs
          <span className="header-caption">
            {" "}
            My Latest <span className="color"> blog posts.</span>
          </span>
        </div>
        <div className="blog-content">
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-one.jpg" alt="blog-one" />
                <div className="blog-date">8 May,20</div>
              </div>
              <div className="blog-text">
                <h3>Harleys In Hawaai</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus alias dolore recusandae illum, corrupti quo veniam
                  saepe aliquid! Quis voluptates ratione consequuntur vel,
                  perferendis cum provident? Magnam fugiat voluptas libero.
                </p>
              </div>
            </Link>
          </div>
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-two.jpg" alt="blog-two" />
                <div className="blog-date">16 Jan,20</div>
              </div>
              <div className="blog-text">
                <h3>Key To Be Productive</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt maiores, recusandae cupiditate ducimus a non tempora,
                  architecto obcaecati eaque ipsum assumenda harum dolorum iusto
                  tenetur eius eligendi dolor magnam sit!
                </p>
              </div>
            </Link>
          </div>
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-three.jpg" alt="blog-three" />
                <div className="blog-date">30 Nov,19</div>
              </div>
              <div className="blog-text">
                <h3>Caffeine Addict</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                  nostrum impedit ipsam perspiciatis ratione sapiente quasi optio
                  reprehenderit, labore consequuntur suscipit cum quas. Officiis
                  dolorem asperiores, ut necessitatibus quas doloremque?
                </p>
              </div>
            </Link>
          </div>
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-four.jpg" alt="blog-four" />
                <div className="blog-date">6 Jul,19</div>
              </div>
              <div className="blog-text">
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, veniam ratione quam vitae, quibusdam explicabo rem
                  debitis velit ipsa repellat, impedit nulla fuga? Amet corporis
                  praesentium quae. Sed, quibusdam necessitatibus.
                </p>
              </div>
            </Link>
          </div>
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-five.jpg" alt="blog-five" />
                <div className="blog-date">1 Jun,19</div>
              </div>
              <div className="blog-text">
                <h3>Work From Home</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  sunt eum necessitatibus rem dignissimos nulla mollitia cumque,
                  provident officiis non vitae? Animi aut doloremque illum, soluta
                  hic minus sint explicabo..
                </p>
              </div>
            </Link>
          </div>
          <div className="blogs">
            <Link to="#">
              <div className="img">
                <img src="images/post-six.jpg" alt="blog-six" />
                <div className="blog-date">28 Feb,19</div>
              </div>
              <div className="blog-text">
                <h3>Business Trip</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo tempora dolorum fuga ratione, unde, ex quaerat iste
                  numquam nemo nihil nobis rem sint quia recusandae dignissimos
                  quos ut rerum nam.
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/*copyright-section You Can Remove After Downloading*/}
        <div className="footer">
          <div className="footer-text">
            <img
              src="./images/copyright.png"
              alt="copyright-img"
              className="images"
              height="14px"
            />
            Ahmed Yar Khan
          </div>
        </div>
        {/*copyright-section*/}
      </div>
      {/*blog end*/}
    </>
  )
}
  
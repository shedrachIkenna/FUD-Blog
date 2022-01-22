import { RiTwitterLine, RiChat3Line, RiHeartLine, RiFacebookCircleFill, RiSnapchatLine, RiTelegramLine, RiCheckFill, RiUser3Line } from 'react-icons/ri'

const BlogDetails = () => {
    return (
        <div className="blog-details-main">
            <div className="blog-details-container">
                <div className="blog-details-content">
                    <h2 className="blog-details-title">Blog Title</h2>
                    <div className="blog-details-author-links-container">
                        <div className="blog-details-author-container">
                            <RiUser3Line size={27}/> 
                            <p className="blog-details-author">Shedrach Ikenna - 20th Sept, 2022</p>
                        </div>
                        <div className="blog-details-socials">
                            <button className="blog-details-btn">Connect</button>
                        </div>
                    </div>
                    <p className="blog-details-text">Lorem ipsum dolor sit amet cons, voluptate ratione voluptatum voluptatem illo maxime ea, consequuntur odio magnam aut doloribus earum rem ab animi nesciunt adipisci! Illum quos debitis quasi reiciendis totam accusamus molestiae mollitia dolor, iure cupiditate atque officiis earum in maxime aliquam ab eos hic eius accusantium repellendus reprehenderit exercitationem! Consectetur inventore vitae officiis eaque cumque exercitationem soluta tempora aperiam nemo nihil quae enim quos amet adipisci ducimus excepturi, deleniti libero. Molestiae, voluptatem! Eum enim commodi alias veritatis sit, officiis, cupiditate reiciendis vero eius sequi, praesentium ut. Nulla, obcaecati eveniet consectetur esse aliquam odit autem suscipit rerum dolore quasi? Nemo, unde beatae officia neque soluta dolore. Et consequatur possimus vel iste, earum harum. Earum architecto accusamus eligendi pariatur expedita, impedit dolores animi commodi eaque dignissimos magni repellat, beatae obcaecati quis rerum cupiditate molestiae culpa laborum rem dolore facilis ullam corrupti, sapiente perferendis. Eaque facilis eligendi nesciunt ad minus amet labore ipsa, consequatur vitae maxime autem cumque tempora, iusto natus placeat saepe ab dignissimos distinctio eveniet maiores commodi? Explicabo veniam perspiciatis amet deserunt praesentium ipsam eos animi, temporibus modi! Maxime id sunt suscipit deserunt sed nemo? In deleniti beatae autem. Quas fuga nesciunt provident dolores quod voluptatem maiores soluta eligendi voluptatibus eaque sint commodi ratione, corrupti unde, repudiandae consectetur minus ab corporis dicta, est temporibus. Consectetur incidunt quisquam dicta commodi quo quis praesentium eveniet voluptates reiciendis eius quia vero voluptatum delectus illo sit aperiam, ratione facere doloribus accusantium voluptatibus repudiandae officiis! Aspernatur molestias qui numquam non aliquam voluptatem necessitatibus ratione sit quia, exercitationem veritatis neque debitis inventore dolores officia blanditiis veniam sunt. Dolores nemo natus distinctio eum, molestiae ducimus rerum. Vero, velit id. In sequi, dolorum quisquam animi iusto reiciendis error nisi. Quasi neque provident quisquam expedita rerum assumenda praesentium obcaecati perspiciatis ad dignissimos, reiciendis alias autem tenetur commodi eveniet eius suscipit earum atque rem eum fuga sapiente dolores? Obcaecati consequatur enim distinctio sit recusandae hic at sed excepturi, nobis omnis ipsam!</p>
                </div>
                <div className="blog-details-links">
                    <div className="blog-details-reaction">
                        <RiCheckFill size={27}/>
                        <RiHeartLine size={27}/>
                        <RiChat3Line size={27}/>
                    </div>
                    <div className="blog-details-socials">
                        <RiTwitterLine size={27}/>
                        <RiFacebookCircleFill size={27}/>
                        <RiSnapchatLine size={27}/>
                        <RiTelegramLine size={27}/>
                    </div>
                </div>
            </div>
            <div className="blog-details-footer">
                <footer>
                    <div className="footer-content">
                        <h2 className="h2-footer">Fud Blog</h2>
                        <p className="p-footer">Fud Official Site</p>
                    </div>
                    <p className="copyright">&copy; Copyright 2021 Shedrach Nwali</p>
                </footer>
            </div>
        </div>
    )
}

export default BlogDetails
const TimeLine = props => {
    return <div ref={props.flowerLifecycle}>
        <section className="time-line py-8em">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
                        <ul className="time-line-list">
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834ad24f83c414_Environmentally%2520friendly%2520manufactured%2520wine%2520bottle%2520comparison%2520verre%2520vert-p-500.png" alt="vert" />
                                </div>
                                <div className="time-content">
                                    <h3>Environmentally friendly manufacturing.</h3>
                                    <p>Producing a Verre Vert bottle emits 34% less carbon than producing a glass bottle, reducing the wine industry’s contributions to greenhouse gas emissions.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834a4b8c83c418_72%25%20lighter%20than%20a%20traditional%20wine%20bottle%20Verre%20Vert.png" alt="Wvert" />
                                </div>
                                <div className="time-content">
                                    <h3>Less than half the weight.</h3>
                                    <p>A Verre Vert bottle weighs just 140 grams, 72% lighter than the traditional glass bottle.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834a2ac883c417_50%2525%2520increased%2520pallet%2520capacity%2520shipping%2520wine%2520bottles%2520efficient%2520Verre%2520Vert-p-500.png" alt="Evert" />
                                </div>
                                <div className="time-content">
                                    <h3>Increased pallet capacity.</h3>
                                    <p>Lighter bottles lead to increased capacity of 2 additional pallets for previously weight-constrained trucks - and, due to their durability and weight, 18 Verre Vert bottles fit comfortably in a traditional 12-Bordeaux box, almost doubling the number of bottles a truck can hold.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834a3aec83c41b_Unbreakable%2520wine%2520bottle%2520Verre%2520Vert-p-500.png" alt="VVert" />
                                </div>
                                <div className="time-content">
                                    <h3>Unbreakable and impermeable to UV light.</h3>
                                    <p>With interior and exterior glass linings, the Verre Vert bottle ensures that wine will age like it would in a traditional glass bottle by protecting the wine from oxygen transfer and providing an inert contact surface. The bulk of the bottle is “bulletproof glass,” which effectively eliminates breakage. Moreover, Verre Vert bottles’ impermeability to UV light protects the wine measurably better against UV damage than traditional glass.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834a42f183c419_Environmentally%2520friendly%2520end%2520of%2520life%2520wine%2520bottle%2520Verre%2520Vert-p-500.png" alt="bVert" />
                                </div>
                                <div className="time-content">
                                    <h3>Environmentally friendly end of life.</h3>
                                    <p>Verre Vert bottles are 100% recyclable; recycling Verre Vert bottles saves nearly four times as much energy as recycling glass.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834a5eea83c41e_Color%2520shape%2520and%2520durability%2520of%2520traditional%2520wine%2520bottles%2520Verre%2520Vert-p-500.png" alt="Wvert" />
                                </div>
                                <div className="time-content">
                                    <h3>A testament to tradition.</h3>
                                    <p>In shape, color, and durability, Verre Vert bottles celebrate centuries of winemaking tradition and preserve the aesthetic cherished by winemakers and wine drinkers alike.</p>
                                </div>
                            </li>
                            <li>
                                <div className="time-img">
                                    <img src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7377bb8834ab30283c426_45%2525%2520reduction%2520in%2520bottle%2520costs%2520Verre%2520Vert%2520wine%2520bottle-p-500.png" alt="rVert" />
                                </div>
                                <div className="time-content">
                                    <h3>45% reduction in bottle costs.</h3>
                                    <p>By cutting costs in packaging, shipping, and breakage, Verre Vert saves wineries 45% in bottle expenses - protecting the bottom line at the same time as the environment.</p>
                                </div>
                            </li>
                        </ul>
                        <hr className="mt-5" />
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default TimeLine
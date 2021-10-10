const buttonOne = document.querySelector("#one");

buttonOne.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>Reagan directs NASA to build the ISS</h4>
    <p class="date">January 25, 1984</p>
    <p class="timelinecontent">
        President Ronald Reagan's State of the Union Address directs NASA to
        build an international space station within the next 10 years.
    </p>
    <img
    src="images/ronald-reagan.jpg"
    alt="President Ronald Reagan."/>
    <p class="imgtext">President Ronald Reagan.</p>`;
};

const buttonTwo = document.querySelector("#two");

buttonTwo.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>First ISS Segment Launches</h4>
    <p class="date">November 20, 1998</p>
    <p class="timelinecontent">
        The first segment of the ISS launches: a Russian proton rocket named
        Zarya ("sunrise").
    </p>`;
};

const buttonThree = document.querySelector("#three");

buttonThree.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>First U.S.-built component launches</h4>
    <p class="date">December 4, 1998</p>
    <p class="timelinecontent">
        Unity, the first U.S.-built component of the International Space
        Station launches—the first Space Shuttle mission dedicated to
        assembly of the station. unity.
    </p>`;
};

const buttonFour = document.querySelector("#four");

buttonFour.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>First Crew to Reside on Station</h4>
					<p class="date">November 2, 2000</p>
					<p class="timelinecontent">
						Astronaut Bill Shepherd and cosmonauts Yuri Gidzenko and Sergei
						Krikalev become the first crew to reside onboard the station,
						staying several months.
                    </p>`;
};

const buttonFive = document.querySelector("#five");

buttonFive.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>U.S. Lab Module Added</h4>
    <p class="date">February 7, 2001</p>
    <p class="timelinecontent">
        Destiny, the U.S. Laboratory module, becomes part of the station.
        Destiny continues to be the primary research laboratory for U.S.
        payloads.
    </p>`;
};

const buttonSix = document.querySelector("#six");

buttonSix.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>U.S. Lab Module Recognized as Newest U.S. National Laboratory</h4>
    <p class="date">2005</p>
    <p class="timelinecontent">
        Congress designates the U.S. portion of the ISS as the nation's
        newest national laboratory to maximize its use for other U.S.
        government agencies and for academic and private institutions.
    </p>`;
};

const buttonSeven = document.querySelector("#seven");

buttonSeven.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>European Lab Joins the ISS</h4>
    <p class="date">February 7, 2008</p>
    <p class="timelinecontent">
        The European Space Agency’s Columbus Laboratory becomes part of the
        station.
    </p>`;
};

const buttonEight = document.querySelector("#eight");

buttonEight.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>Japanese Lab Joins the ISS</h4>
    <p class="date">March 11, 2008</p>
    <p class="timelinecontent">
        The first Japanese Kibo laboratory module becomes part of the
        station.
    </p>`;
};

const buttonNine = document.querySelector("#nine");

buttonNine.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>ISS 10-Year Anniversary</h4>
    <p class="date">November 2, 2010</p>
    <p class="timelinecontent">
        The ISS celebrates its 10-year anniversary of continuous human
        occupation. Since Expedition 1 in the fall of 2000, 202 people had
        visited the station.
    </p>
    <img
    src="images/iss.jpg"
    alt="The International Space Station orbit
    in space."/>
    <p class="imgtext">The International Space Station in space.</p>`;
};

const buttonTen = document.querySelector("#ten");

buttonTen.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>NASA Issues Cooperative Agreement</h4>
    <p class="date">February 14, 2011</p>
    <p class="timelinecontent">
        NASA issues a cooperative agreement notice for a management partner.
    </p>`;
};

const buttonEleven = document.querySelector("#eleven");

buttonEleven.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>NASA Selects the ISS National Lab</h4>
    <p class="date">July 13, 2011</p>
    <p class="timelinecontent">
        NASA selects the Center for the Advancement of Science in Space to
        manage the ISS National Lab.
    </p>`;
};

const buttonTwelve = document.querySelector("#twelve");

buttonTwelve.onclick = function () {
	document.querySelector(
		"#OnClickContent"
	).innerHTML = `<h4>The First ISS National Lab Research Flight</h4>
    <p class="date">2013</p>
    <p class="timelinecontent">
        Proteins can be grown as crystals in space with nearly perfect
        three-dimensional structures useful for the development of new
        drugs. The ISS National Lab's protein crystal growth (PCG) series of
        flights began in 2013, allowing researchers to utilize the unique
        environment of the ISS.
    </p>`;
};

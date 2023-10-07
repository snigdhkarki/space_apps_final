var spaceWeatherEventscme = [];
var spaceWeatherEventsgst = [];
var spaceWeatherEventsips = [];
var spaceWeatherEventsflr = [];
var spaceWeatherEventssep = [];
var spaceWeatherEventsmpc = [];
var spaceWeatherEventsrbe = [];
var spaceWeatherEventshss = [];

async function getData(planet) {
	const headers = new Headers();
	headers.append("X-Api-Key", "MOh9+ippY7F6H2+BmZtG1g==I2raZQ9woIno6aPz");
	const response = await fetch(
		"https://api.api-ninjas.com/v1/planets?name=" + planet,
		{
			method: "GET",
			headers: {
				"X-Api-Key": "MOh9+ippY7F6H2+BmZtG1g==I2raZQ9woIno6aPz",
			},
		}
	);
	let data = await response.json();
	data = data[0];
	let html = `
  <table>
    <tr>
      <th>Name</th>
      <td>${data.name}</td>
    </tr>
    <tr>
      <th>Mass</th>
      <td>${data.mass * 189.8} X 10<sup>25</sup></td>
    </tr>
    <tr>
      <th>Radius</th>
      <td>${data.radius * 69911} km</td>
    </tr>
    <tr>
      <th>Temperature</th>
      <td>${data.temperature} K</td>
    </tr>
    <tr>
      <th>Semi-major Axis</th>
      <td>${data.semi_major_axis} AU</td>
    </tr>
    <tr>
      <th>Distance from Earth</th>
      <td>${data.distance_light_year} light yr</td>
    </tr>
  </table>
  `;
	document.querySelector("#prop").innerHTML = html;
}

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	const search = document.querySelector("#date");
	const dest = document.querySelector("#dest");
	const spaceTravelDestination = dest.value;
	const date = new Date(search.value); // Your initial date
	const sevendaysbefore = new Date(date);
	sevendaysbefore.setDate(date.getDate() - 7);
	const sevendaysbeforevalue = sevendaysbefore.toISOString().split("T")[0];

	let size = 300;
    let planet = dest.value;
    document.querySelector("#model_div").innerHTML = `<model-viewer auto-rotate id="model" style="width:${size}px; height:${size}px"  src="assets/models/${planet}.glb" camera-controls touch-action="pan-y"></model-viewer>`;
	getData(spaceTravelDestination);
	document.querySelector("#hazardlist").innerHTML = `<ul class="links">
	<li>
	  <div class="up">
		CORONAL MASS EJECTION
		<div class="logos">
		  <i class="material-icons right" id="data_button">add</i>
		  <i class="material-icons right" id="about_button">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div"><div style="display:flex;"><div style="flex:1;" id="cme-list" class="alllist" style="display: none"></div><div style="flex:1;">>information about the sun and space weather should be relayed to space travellers to take precautionary measures
			>designated safe havens with additional shielding to protect against radiation and particles associated with CMEs.
			>Space travelers can carry radiation monitoring equipment that continuously measures the radiation levels in their environment
			</div></div></div>
		<div id="about_div">Bursts of solar plasma(materials) and magnetic fields into space at speed ranging from 250km/s to as fast as 3000km/s.These events are associated with the Sun and are caused by various solar activities, such as solar flares or the destabilization of the Sun's magnetic fields.
			
			</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		GEOMAGNETIC STORM
		<div class="logos">
		  <i class="material-icons right" id="data_button1">add</i>
		  <i class="material-icons right" id="about_button1">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div1"><div style="display:flex;"><div style="flex:1;" id="gst-list" class="alllist" style="display: none"></div><div style="flex:1;">Maintain continuous communication with mission control on Earth to receive updates on space weather conditions and any alerts related to geomagnetic storms
			>Carry and regularly use radiation monitoring equipment to measure radiation levels in your spacecraft
			>Whenever possible, plan your mission to coincide with periods of lower solar activity, such as during solar minimum, when the risk of severe geomagnetic storms is reduced
			</div></div></div>
		<div id="about_div1">temporary disturbance of Earth's magnetic field caused by the interaction between the solar wind (charged particles ejected from the Sun) and Earth's magnetosphere (the region of space around Earth influenced by its magnetic field).Geomagnetic storms can result in a variety of effects on Earth and space travel, and they are often associated with solar activity, including solar flares and coronal mass ejections (CMEs).
			</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		INTERPLANETARY SHOCK
		<div class="logos">
		  <i class="material-icons right" id="data_button2">add</i>
		  <i class="material-icons right" id="about_button2">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div2"><div style="display:flex;"><div style="flex:1;" id="ips-list" class="alllist" style="display: none"></div><div style="flex:1;">Maintain continuous communication with mission control on Earth to receive real-time updates on space weather conditions and any alerts related to interplanetary shocks.
			>Carry and regularly use space weather monitoring equipment on your spacecraft to detect changes in the solar wind and magnetic fields.
			>Ensure that your spacecraft is designed with a designated safe haven or sheltered area that offers enhanced radiation and particle shielding. 
			>Wear specialized radiation protection suits or vests when entering the spacecraft's safe haven during an IPS event
			</div></div></div>
		<div id="about_div2">It is a sudden and abrupt change in the solar wind's properties as solar wind travels with high speed through space.These shocks are often associated with disturbances originating from the Sun, such as coronal mass ejections (CMEs) or solar flares.
			</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		SOLAR FLARE
		<div class="logos">
		  <i class="material-icons right" id="data_button3">add</i>
		  <i class="material-icons right" id="about_button3">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div3"><div style="display:flex;"><div style="flex:1;" id="flr-list" class="alllist" style="display: none"></div><div style="flex:1;">>Maintain continuous communication with mission control on Earth to receive real-time updates on space weather conditions, including any alerts related to solar flares.
			>Carry and regularly use space weather monitoring equipment on your spacecraft to detect changes in radiation levels, particularly X-rays and charged particles.
			Ensure that your spacecraft is designed with a designated safe haven or sheltered area that offers enhanced radiation shielding
			>Advocate for spacecraft designs that incorporate robust shielding materials to protect against radiation and charged particles. 
			</div></div></div>
		<div id="about_div3">A sudden, intense burst of energy and radiation from the Sun's surface. Solar flares are some of the most energetic events in our solar system and can have various effects on space travel, types include:A and B are weakest , not noticeable.C -class: weakest type, minor impact on Earth’s ionosphere and space weather.M-class: moderate type</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		SOLAR ENERGETIC PARTICLE
		<div class="logos">
		  <i class="material-icons right" id="data_button4">add</i>
		  <i class="material-icons right" id="about_button4">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div4"><div style="display:flex;"><div style="flex:1;" id="sep-list" class="alllist" style="display: none"></div><div style="flex:1;">Maintain constant communication with mission control on Earth to receive real-time updates on space weather conditions, including any alerts related to SEP events.
			>Carry and regularly use radiation monitoring equipment on your spacecraft to detect changes in radiation levels, particularly high-energy particles. 
			>Advocate for spacecraft designs that incorporate robust shielding materials(thicker and high density) to protect against radiation and charged particles
			>Ensure that your spacecraft is designed with a designated safe haven or sheltered area that offers enhanced radiation shielding.
			</div></div></div>
		<div id="about_div4">Solar Energetic Particles (SEPs) are high-energy charged particles released from the Sun into space during these events and can pose a variety of risks to space travelers.As a space traveler, encountering Solar Energetic Particles (SEPs) during your mission can pose significant health risks due to their high-energy nature.
			</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		MAGNETOPAUSE CROSSING
		<div class="logos">
		  <i class="material-icons right" id="data_button5">add</i>
		  <i class="material-icons right" id="about_button5">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div5"><div style="display:flex;"><div style="flex:1;" id="mpc-list" class="alllist" style="display: none"></div><div style="flex:1;">>These events are associated with the Sun and are caused by various solar activities, such as solar flares or the destabilization of the Sun's magnetic fields.
			>Stay informed about space weather conditions, particularly solar activity and solar wind parameters. 
			>Continuously monitor radiation levels on your spacecraft. Magnetopause crossings can involve changes in the surrounding radiation environment, so being aware of radiation levels is crucial for astronaut safety.
			>If your spacecraft has a designated safe haven, ensure that it is well-equipped and designed to minimize radiation exposure during MPC events.
			</div></div></div>
		<div id="about_div5">A Magnetopause Crossing (MPC) is an event that occurs when a spacecraft or object in space crosses the magnetopause,i.e. transitions from the region of space dominated by the solar wind (the interplanetary medium) to the region dominated by Earth's magnetic field (the magnetosphere).</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		RADIATION BELT ENHANCEMENT
		<div class="logos">
		  <i class="material-icons right" id="data_button6">add</i>
		  <i class="material-icons right" id="about_button6">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div6"><div style="display:flex;"><div style="flex:1;" id="rbe-list" class="alllist" style="display: none"></div><div style="flex:1;">Maintain constant communication with mission control on Earth to receive real-time updates on space weather conditions, including any alerts related to RBE events.
			>Carry and regularly use radiation monitoring equipment on your spacecraft to detect changes in radiation levels, particularly high-energy electrons in Earth's radiation belts
			>Ensure that your spacecraft is designed with a designated safe haven or sheltered area that offers enhanced radiation shielding.
			>Consider wearing specialized radiation protection suits or vests when entering the spacecraft's safe haven during an RBE event.
			</div></div></div>
		<div id="about_div6">Radiation Belt Enhancement (RBE) refers to a temporary increase in the intensity of charged particles, particularly electrons, within Earth's radiation belts.	Encountering a Radiation Belt Enhancement (RBE) as a space traveler can pose significant risks due to increased radiation levels in Earth's radiation belts. 
			</div>
	  </div>
	</li>
	<li>
	  <div class="up">
		FLIGHT SPEED STREAM
		<div class="logos">
		  <i class="material-icons right" id="data_button7">add</i>
		  <i class="material-icons right" id="about_button7">report</i>
		</div>
	  </div>
	  <div class="data">
		<div id="data_div7"><div style="display:flex;"><div style="flex:1;" id="hss-list" class="alllist" style="display: none"></div><div style="flex:1;">>Maintain continuous communication with mission control on Earth to receive real-time updates on space weather conditions, including any alerts related to HSS events.
			>Carry and regularly use radiation monitoring equipment on your spacecraft to detect changes in radiation levels, particularly high-energy particles associated with HSS events.
			>Advocate for spacecraft designs that incorporate robust shielding materials to protect against increased radiation exposure during HSS events.
			</div></div></div>
		<div id="about_div7">A High-Speed Stream (HSS) refers to a continuous and fast-moving stream of solar wind that emanates from the Sun's coronal holes. Encountering a High-Speed Stream (HSS) as a space traveler can pose challenges and potential risks due to increased solar wind speeds and space weather effects.
			</div>
	  </div>
	</li>
  </ul>`;
  document.querySelector("#data_button").addEventListener("click", (e) => {
	const data_div = document.getElementById("data_div");
	if (data_div.style.display == "block") {
	  data_div.style.display = "none";
	} else {
	  data_div.style.display = "block";
	}
  });
  
  document.querySelector("#about_button").addEventListener("click", (e) => {
	const about_div = document.getElementById("about_div");
	if (about_div.style.display == "block") {
	  about_div.style.display = "none";
	} else {
	  about_div.style.display = "block";
	}
  });
  
  document.querySelector("#data_button1").addEventListener("click", (e) => {
	const data_div1 = document.getElementById("data_div1");
	if (data_div1.style.display == "block") {
	  data_div1.style.display = "none";
	} else {
	  data_div1.style.display = "block";
	}
  });
  
  document.querySelector("#about_button1").addEventListener("click", (e) => {
	const about_div1 = document.getElementById("about_div1");
	if (about_div1.style.display == "block") {
	  about_div1.style.display = "none";
	} else {
	  about_div1.style.display = "block";
	}
  });
  document.querySelector("#data_button2").addEventListener("click", (e) => {
	const data_div2 = document.getElementById("data_div2");
	if (data_div2.style.display == "block") {
	  data_div2.style.display = "none";
	} else {
	  data_div2.style.display = "block";
	}
  });
  
  document.querySelector("#about_button2").addEventListener("click", (e) => {
	const about_div2 = document.getElementById("about_div2");
	if (about_div2.style.display == "block") {
	  about_div2.style.display = "none";
	} else {
	  about_div2.style.display = "block";
	}
  });
  document.querySelector("#data_button3").addEventListener("click", (e) => {
	const data_div3 = document.getElementById("data_div3");
	if (data_div3.style.display == "block") {
	  data_div3.style.display = "none";
	} else {
	  data_div3.style.display = "block";
	}
  });
  
  document.querySelector("#about_button3").addEventListener("click", (e) => {
	const about_div3 = document.getElementById("about_div3");
	if (about_div3.style.display == "block") {
	  about_div3.style.display = "none";
	} else {
	  about_div3.style.display = "block";
	}
  });
  document.querySelector("#data_button4").addEventListener("click", (e) => {
	const data_div4 = document.getElementById("data_div4");
	if (data_div4.style.display == "block") {
	  data_div4.style.display = "none";
	} else {
	  data_div4.style.display = "block";
	}
  });
  
  document.querySelector("#about_button4").addEventListener("click", (e) => {
	const about_div4 = document.getElementById("about_div4");
	if (about_div4.style.display == "block") {
	  about_div4.style.display = "none";
	} else {
	  about_div4.style.display = "block";
	}
  });
  document.querySelector("#data_button5").addEventListener("click", (e) => {
	const data_div5 = document.getElementById("data_div5");
	if (data_div5.style.display == "block") {
	  data_div5.style.display = "none";
	} else {
	  data_div5.style.display = "block";
	}
  });
  
  document.querySelector("#about_button5").addEventListener("click", (e) => {
	const about_div5 = document.getElementById("about_div5");
	if (about_div5.style.display == "block") {
	  about_div5.style.display = "none";
	} else {
	  about_div5.style.display = "block";
	}
  });
  document.querySelector("#data_button6").addEventListener("click", (e) => {
	const data_div6 = document.getElementById("data_div6");
	if (data_div6.style.display == "block") {
	  data_div6.style.display = "none";
	} else {
	  data_div6.style.display = "block";
	}
  });
  
  document.querySelector("#about_button6").addEventListener("click", (e) => {
	const about_div6 = document.getElementById("about_div6");
	if (about_div6.style.display == "block") {
	  about_div6.style.display = "none";
	} else {
	  about_div6.style.display = "block";
	}
  });
  document.querySelector("#data_button7").addEventListener("click", (e) => {
	const data_div7 = document.getElementById("data_div7");
	if (data_div7.style.display == "block") {
	  data_div7.style.display = "none";
	} else {
	  data_div7.style.display = "block";
	}
  });
  
  document.querySelector("#about_button7").addEventListener("click", (e) => {
	const about_div7 = document.getElementById("about_div7");
	if (about_div7.style.display == "block") {
	  about_div7.style.display = "none";
	} else {
	  about_div7.style.display = "block";
	}
  });
  
	console.log(
		"https://api.nasa.gov/DONKI/CME?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/GST?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/IPS?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/FLR?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/SEP?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/MPC?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/RBE?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	console.log(
		"https://api.nasa.gov/DONKI/HSS?startDate=" +
			sevendaysbeforevalue +
			"&endDate=" +
			search.value +
			"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6"
	);
	const apiUrlcme =
		"https://api.nasa.gov/DONKI/CME?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlgst =
		"https://api.nasa.gov/DONKI/GST?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlips =
		"https://api.nasa.gov/DONKI/IPS?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlflr =
		"https://api.nasa.gov/DONKI/FLR?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlsep =
		"https://api.nasa.gov/DONKI/SEP?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlmpc =
		"https://api.nasa.gov/DONKI/MPC?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlrbe =
		"https://api.nasa.gov/DONKI/RBE?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";
	const apiUrlhss =
		"https://api.nasa.gov/DONKI/HSS?startDate=" +
		sevendaysbeforevalue +
		"&endDate=" +
		search.value +
		"&api_key=NiBesglkvtLGAOnd3Y0b864M6GS2HRGi3wN2lTZ6";

	fetch(apiUrlcme)
		.then((response) => response.json())
		.then((data) => {
			// Assuming 'data' is an array of objects representing space weather events
			data.forEach((eventData) => {
				// Create a structure (object) to store the event information
				const event = {
					activityID: eventData.activityID,
					startTime: new Date(eventData.startTime).toUTCString(),
					sourceLocation: eventData.sourceLocation || "N/A",
					note: eventData.note,
					instruments: eventData.instruments.map((inst) => inst.displayName),
					locationlist: (
						eventData?.cmeAnalyses?.[0]?.enlilList?.[0]?.impactList || []
					).map((impl) => impl?.location),
					locationandarrivalTime: (
						eventData?.cmeAnalyses?.[0]?.enlilList?.[0]?.impactList || []
					).map((impl) => ({
						location: impl?.location,
						arrivalTime: impl?.arrivalTime,
					})),
					cmeAnalysis: {
						type: eventData?.cmeAnalyses?.[0]?.type || "DefaultType",

						speed: eventData?.cmeAnalyses?.[0]?.speed
							? `${eventData.cmeAnalyses[0].speed} km/s`
							: "DefaultSpeed",

						link: eventData?.cmeAnalyses?.[0]?.link ?? "DefaultLink",
					},
					totalcmeAnalysis: eventData.cmeAnalyses,
					link: eventData.link,
				};
				console.log(event);

				// Push the event structure to the array
				spaceWeatherEventscme.push(event);
			});

			// Filter potentially dangerous CME events
			const dangerousCMEs = spaceWeatherEventscme.filter((cme) => {
				return cme.locationlist.includes(spaceTravelDestination);
			});

			console.log("dangerous");
			console.log(dangerousCMEs);
			// Display dangerous CME events
			const cmeListContainer = document.querySelector("#cme-list");
			dangerousCMEs.forEach((cme) => {
				const cmeItem = document.createElement("li");
				const arrivalTimes = (cme?.locationandarrivalTime || []).filter(
					(sublist) => sublist.location === spaceTravelDestination
				);
				cmeItem.innerHTML = `Starttime: ${cme.startTime} <br> Type: ${
					cme.cmeAnalysis.type
				} <br> Speed: ${
					cme.cmeAnalysis.speed
				}<br> Destination: ${spaceTravelDestination}<br> Arrivaltime: ${
					arrivalTimes.length > 0
						? arrivalTimes[0].arrivalTime
						: "DefaultArrivalTime"
				}<br>link: ${cme.link}<br><br>`;
				cmeListContainer.appendChild(cmeItem);
			});
			cmeListContainer.style.display = "block";
		});
	fetch(apiUrlgst)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.gstID,
					startTime: new Date(eventData.startTime).toUTCString(),
					sourceLocation: eventData.allKpIndex[0].source,
					severity: eventData.allKpIndex[0].kpIndex,
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventsgst.push(event);
			});
			const gstListContainer = document.querySelector("#gst-list");
			spaceWeatherEventsgst.forEach((gst) => {
				const gstItem = document.createElement("li");
				gstItem.innerHTML = `Starttime: ${gst.startTime} <br> Severity: ${gst.severity} <br> Source: ${gst.sourceLocation}<br> 
      link: ${gst.link}<br><br>`;
				gstListContainer.appendChild(gstItem);
			});
			gstListContainer.style.display = "block";
		});
	fetch(apiUrlips)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.activityID,
					startTime: new Date(eventData.eventTime).toUTCString(),
					Location: eventData.location,
					instruments: eventData.instruments.map((inst) => inst.displayName),
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventsips.push(event);
			});
			const dangerousIPSs = spaceWeatherEventsips.filter((ips) => {
				return ips.Location === spaceTravelDestination;
			});

			console.log("dangerous");
			console.log(dangerousIPSs);
			// Display dangerous CME events
			const ipsListContainer = document.querySelector("#ips-list");
			dangerousIPSs.forEach((ips) => {
				const ipsItem = document.createElement("li");
				ipsItem.innerHTML = `Starttime: ${ips.startTime} 
      <br> Destination: ${spaceTravelDestination}<br> 
      link: ${ips.link}<br><br>`;
				ipsListContainer.appendChild(ipsItem);
			});
			ipsListContainer.style.display = "block";
		});
	fetch(apiUrlflr)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.flrID,
					startTime: new Date(eventData.beginTime).toUTCString(),
					peakTime: new Date(eventData.peakTime).toUTCString(),
					classType: eventData.classType,
					sourceLocation: eventData.sourceLocation,
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventsflr.push(event);
			});
			const flrListContainer = document.querySelector("#flr-list");
			spaceWeatherEventsflr.forEach((flr) => {
				const flrItem = document.createElement("li");
				flrItem.innerHTML = `Starttime: ${flr.startTime} <br> Peaktime: ${flr.peakTime} <br> classType: ${flr.classType} <br> Source: ${flr.sourceLocation}<br> 
      link: ${flr.link}<br><br>`;
				flrListContainer.appendChild(flrItem);
			});
			flrListContainer.style.display = "block";
		});
	fetch(apiUrlsep)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.sepID,
					startTime: new Date(eventData.eventTime).toUTCString(),
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventssep.push(event);
			});
			const sepListContainer = document.querySelector("#sep-list");
			spaceWeatherEventssep.forEach((sep) => {
				const sepItem = document.createElement("li");
				sepItem.innerHTML = `Starttime: ${sep.startTime} <br> 
      link: ${sep.link}<br><br>`;
				sepListContainer.appendChild(sepItem);
			});
			sepListContainer.style.display = "block";
		});
	fetch(apiUrlmpc)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.mpcID,
					startTime: new Date(eventData.eventTime).toUTCString(),
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventsmpc.push(event);
			});
			const mpcListContainer = document.querySelector("#mpc-list");
			spaceWeatherEventsmpc.forEach((mpc) => {
				const mpcItem = document.createElement("li");
				mpcItem.innerHTML = `Starttime: ${mpc.startTime} <br> 
      link: ${mpc.link}<br><br>`;
				mpcListContainer.appendChild(mpcItem);
			});
			mpcListContainer.style.display = "block";
		});
	fetch(apiUrlrbe)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.rbeID,
					startTime: new Date(eventData.eventTime).toUTCString(),
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventsrbe.push(event);
			});
			const rbeListContainer = document.querySelector("#rbe-list");
			spaceWeatherEventsrbe.forEach((rbe) => {
				const rbeItem = document.createElement("li");
				rbeItem.innerHTML = `Starttime: ${rbe.startTime} <br> 
      link: ${rbe.link}<br><br>`;
				rbeListContainer.appendChild(rbeItem);
			});
			rbeListContainer.style.display = "block";
		});
	fetch(apiUrlhss)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((eventData) => {
				const event = {
					activityID: eventData.hssID,
					startTime: new Date(eventData.eventTime).toUTCString(),
					link: eventData.link,
				};
				console.log(event);
				spaceWeatherEventshss.push(event);
			});
			const hssListContainer = document.querySelector("#hss-list");
			spaceWeatherEventshss.forEach((hss) => {
				const hssItem = document.createElement("li");
				hssItem.innerHTML = `Starttime: ${hss.startTime} <br> 
      link: ${hss.link}<br><br>`;
				hssListContainer.appendChild(hssItem);
			});
			hssListContainer.style.display = "block";
		});
});
//2022-04-15
//STEREO A
//2022-02-10
//STEREO A
//analysis and analyses change
//something wrong with api for time like 2022-01-00

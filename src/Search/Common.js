export const debounce = (fn, timer) => {
	let id
	return function(...params) {
		if (id) {
			clearTimeout(id);
		}
		id = setTimeout(() => {
			fn(...params);
			id = null;
		}, timer)
	}
}


export const response = [{

	"link": "https://picsum.photos/200/300",

	"img": "https://picsum.photos/200/300",

	"imgAlt": "The burden on the immunocompromised is still significant",

	"title": "The burden on the immunocompromised is still significant",

	"text": null,

	"dateTime": "2023-07-17",

	"date": "17 July 2023",

	"tag": {

		"id": "Topics/covid-19",

		"title": "COVID-19"

	},

	"year": {

		"id": "2023",

		"title": "2023"

	}

}, {

	"link": "https://picsum.photos/200",

	"img": "https://picsum.photos/200",

	"imgAlt": "Developing a global supply network fit for the future",

	"title": "Developing a global supply network fit for the future",

	"text": null,

	"dateTime": "2023-07-11",

	"date": "11 July 2023",

	"tag": {

		"id": "Topics/technologies",

		"title": "Technologies"

	},

	"year": {

		"id": "2023",

		"title": "2023"

	}

}, {

	"link": "https://picsum.photos/300/300",

	"img": "https://picsum.photos/300/300",

	"imgAlt": "Immunobridging trials: Working to bring medicines to patients faster ",

	"title": "Immunobridging trials: Working to bring medicines to patients faster ",

	"text": null,

	"dateTime": "2023-05-23",

	"date": "23 May 2023",

	"tag": {

		"id": "Topics/clinical-innovation",

		"title": "Clinical-innovation"

	},

	"year": {

		"id": "2023",

		"title": "2023"

	}

}, {

	"link": "https://picsum.photos/400/300",

	"img": "https://picsum.photos/400/300",

	"imgAlt": "Understanding the impact of severe viral respiratory infections",

	"title": "Understanding the impact of severe viral respiratory infections",

	"text": null,

	"dateTime": "2023-04-20",

	"date": "20 April 2023",

	"tag": {

		"id": "Topics/disease-understanding",

		"title": "Disease understanding"

	},

	"year": {

		"id": "2023",

		"title": "2023"

	}

}, {

	"link": "https://picsum.photos/500/300",

	"img": "https://picsum.photos/500/300",

	"imgAlt": "The changing landscape of precision medicine",

	"title": "The changing landscape of precision medicine",

	"text": null,

	"dateTime": "2023-01-23",

	"date": "23 January 2023",

	"tag": {

		"id": "Topics/next-generation-therapeutics",

		"title": "Next generation therapeutics"

	},

	"year": {

		"id": "2023",

		"title": "2023"

	}

}, {

	"link": "https://picsum.photos/500",

	"img": "https://picsum.photos/500",

	"imgAlt": "Transforming cancer diagnostics with computational pathology",

	"title": "Transforming cancer diagnostics with computational pathology",

	"text": null,

	"dateTime": "2022-12-09",

	"date": "09 December 2022",

	"tag": {

		"id": "Topics/technologies",

		"title": "Technologies"

	},

	"year": {

		"id": "2022",

		"title": "2022"

	}

}, {

	"link": "https://picsum.photos/400/300",

	"img": "https://picsum.photos/400/300",

	"imgAlt": "Navigating genetics to reveal a MAP for diabetes resistance",

	"title": "Navigating genetics to reveal a MAP for diabetes resistance",

	"text": null,

	"dateTime": "2022-11-17",

	"date": "17 November 2022",

	"tag": {

		"id": "Topics/data-science-ai",

		"title": "Data science & AI"

	},

	"year": {

		"id": "2022",

		"title": "2022"

	}

}, {

	"link": "https://picsum.photos/600/500",

	"img": "https://picsum.photos/600/500",

	"imgAlt": "Streamlining clinical trials for patients and clinicians through digital",

	"title": "Streamlining clinical trials for patients and clinicians through digital",

	"text": null,

	"dateTime": "2022-11-04",

	"date": "04 November 2022",

	"tag": {

		"id": "Topics/clinical-innovation",

		"title": "Clinical-innovation"

	},

	"year": {

		"id": "2022",

		"title": "2022"

	}

}, {

	"link": "https://picsum.photos/300/300",

	"img": "https://picsum.photos/300/300",

	"imgAlt": "Rising to the challenge through early years talent",

	"title": "Rising to the challenge through early years talent",

	"text": null,

	"dateTime": "2022-11-02",

	"date": "02 November 2022",

	"tag": {

		"id": "Topics/disease-understanding",

		"title": "Disease understanding"

	},

	"year": {

		"id": "2022",

		"title": "2022"

	}

}, {

	"link": "https://picsum.photos/600/300",

	"img": "https://picsum.photos/600/300",

	"imgAlt": "Pushing boundaries to deliver <strong>COVID</strong>-19 vaccine across the Globe pt.2",

	"title": "Pushing boundaries to deliver <strong>COVID</strong>-19 vaccine across the Globe pt.2",

	"text": null,

	"dateTime": "2021-01-27",

	"date": "27 January 2021",

	"tag": {

		"id": "Topics/technologies",

		"title": "Technologies"

	},

	"year": {

		"id": "2021",

		"title": "2021"

	}

}, {

	"link": "http://www.astrazeneca.com/what-science-can-do/topics/technologies/innovating-production-and-manufacture-to-meet-the-challenge-of-covid-19-2.html",

	"img": "/content/dam/az/what-science-can-do/stories/innovating-production-and-manufacture-to-meet-the-challenge-of-covid-19/Technology_RGB_Navy.Green.png/jcr:content/renditions/cq5dam.web.320.Technology_RGB_Navy.Green.png",

	"imgAlt": "Innovating Production and Manufacture to meet the Challenge of <strong>COVID</strong>-19 pt.1",

	"title": "Innovating Production and Manufacture to meet the Challenge of <strong>COVID</strong>-19 pt.1",

	"text": null,

	"dateTime": "2021-01-27",

	"date": "27 January 2021",

	"tag": {

		"id": "Topics/technologies",

		"title": "Technologies"

	},

	"year": {

		"id": "2021",

		"title": "2021"

	}

}, {

	"link": "https://picsum.photos/400/300",

	"img": "https://picsum.photos/400/300",

	"imgAlt": "What does immunogenicity mean in the context of <strong>COVID</strong>-19 vaccines?",

	"title": "What does immunogenicity mean in the context of <strong>COVID</strong>-19 vaccines?",

	"text": null,

	"dateTime": "2020-11-19",

	"date": "19 November 2020",

	"tag": {

		"id": "Topics/covid-19",

		"title": "COVID-19"

	},

	"year": {

		"id": "2020",

		"title": "2020"

	}

}]
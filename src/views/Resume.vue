<template>
  <div class="header">
    <v-container>
      <!-- HEADER AREA -->
      <headerarea></headerarea>
      <v-row no-gutters class="white">
        <v-col cols="12" sm="12" md="4" lg="4">
          <navbarrarea></navbarrarea>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8">
          <div class="body_area">
			  <section class="resume_area">
					<v-card flat class="pages_title">
					<h3> {{resumetext.title}}  </h3>
					</v-card>
					<v-card class="education_area" flat>
						<div class="title_are">
							<v-icon class="resum_icon"> {{resumetext.icon}} </v-icon>
							<h3 class="rsume_title">  {{resumetext.text}} </h3>					
						</div>
					</v-card>
					<v-card class="education_details" flat v-for="work in works" :key="work">
						<h2 class="work_date"> {{work.date}} </h2>
						<p> {{work.title}}  </p>
						<p>  {{work.name}}   </p>
						<p>  {{work.details}}   </p>
					</v-card>
			  </section>
			  <section class="resume_area skilarea">
					<v-card class="education_area" flat>
						<div class="title_are">
							<v-icon class="resum_icon"> {{resumetext.icon2}} </v-icon>
							<h3 class="rsume_title">  {{resumetext.text2}} </h3>					
						</div>
					</v-card>
					<div class="education_details">
						<v-row>
							<v-col cols="12" md="6" lg="6" xl="6" flat v-for="skill in skills" :key="skill">
								<v-card class="education_details" flat>
									<h2 class="work_date"> {{skill.title}} </h2>
									<v-progress-linear :value="skill.ddd" height="10" striped :color="skill.color"></v-progress-linear>
								</v-card>
							</v-col>
						</v-row>
					</div>
			  </section>
		  </div>
        </v-col>
      </v-row>

  </v-container>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  components: { carousel },
  data: () => ({
	  resumetext: {
		  title: "My Resume",
		  icon: "mdi-minus-network ",
		  icon2: "mdi-checkerboard ",
		  text: "PROFESSIONAL EXPERIENCE",
		  text2: "PROFESSIONAL SKILLS",
		  
	  },
	  works: [
		  { date: "2017 - Present", title: "WEBSITE DESIGNER || DEVELOPER ", name: "WAN IT LTD", details: "Template Design, Logo Design, Banner Design (Adobe photoshop, Adobe illustrator )Font End Development (Html, Css, Sass, Bootstrap, JavaScript, Vue Js, Vuetify Js )Back End Development (PHP, JavaScripit)"  },
		  { date: "2016 - 2017", title: "WEBSITE DESIGNER ", name: "HABIB INTELLIGENT SOFTWARE LTD.", details: "Template Design, Logo Design, Banner Design (Adobe photoshop, Adobe illustrator )Font End Development (Html, Css, Bootstrap, JavaScript)"  },
		  { date: "2015 - 2016", title: "WEBSITE DESIGNER ", name: "SOFTECH INC. LTD .", details: "Template Design, Logo Design, Banner Design (Adobe photoshop, Adobe illustrator )Font End Development (Html, Css, Bootstrap, JavaScript)"  },
	  ],
	  skills: [
		  { title: "HTML", ddd: "70",color: "deep-orange" },
		  { title: "CSS", ddd: "70", color: "light-green darken-4" },
		  { title: "SCSS", ddd: "60", color: "lime"  },
		  { title: "LCSS", ddd: "70", color: "light-blue" },
		  { title: "Vue Js", ddd: "70", color: "deep-orange" },
		  { title: "Vuetify Js", ddd: "70", color: "light-green darken-4" },
		  { title: "Javascript", ddd: "50", color: "lime" },
		  { title: "PHP", ddd: "50", color: "light-blue" },
		  { title: "Adobe Photoshop", ddd: "50",color: "deep-orange" },
		  { title: "Adobe Illustrator", ddd: "50", color: "light-green darken-4" },
	  ] 
  }),
};
</script>


<style scoped>
.body_area {
	width: 100%;
	height: 600px;
	overflow: auto;
	margin-bottom: 40px;
}
.whatidong_text {
	width: 100%;
	font-size: 20px;
	font-weight: 600;
}
.whatidong {
	padding: 0 15px;
}
.skill_images {
	margin: auto;
	width: 15%;
	display: block;
	margin-bottom: 15px;
}

.skill_area {
	width: 100%;
	text-align: center;
	padding: 15px 0;;
}

.pages_title p {
	border-style: dotted;
	border-left: none;
	border-right: 0;
	padding: 10px 0;
}
.pages_title h3 {
	font-size: 24px;
	color: #222;
	font-weight: 600;
}

.pages_title {
	width: 100%;
	float: left;
	display: block;
	padding: 15px;
}

.logo_area {
  padding: 20px;
}
.logo_area img {
  border-radius: 30px;
}

.header_bg {
	width: 80% !important;
	float: right;
	display: block;
	border-radius: 0px 39px 0 0px;
}

.logo_area {
	width: 100%;
	float: right;
	display: block;
	background:
	#fff;
	border-radius: 26px 26px 0 0;
	text-align: center;
}
.logo_area h1{
	font-size: 18px;
	padding: 19px 30px;
	font-weight: 600;
	float: left;
	text-transform: uppercase;
}


.menu_text {
	color: #222;
	padding: 10px 18px;
	text-transform: uppercase;
	font-size: 14px;
	cursor: pointer;
	transition: all .3s;
	font-weight: 600;
}
.menu_text:hover {
	border-radius: 5px;
	color: #1A237E;
}
.menu_text.active {
	background-color: #1A237E;
	border-radius: 5px;
	color: #fff;
}
</style>


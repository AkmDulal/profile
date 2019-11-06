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
			<v-card flat class="pages_title">
			  <h3> About Me </h3>
			  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam architecto vel. Omnis dolor, ea nisi quos, sapiente architecto accusamus dolorum doloribus dignissimos repellat esse iure expedita delectus facere totam! </p>
		    </v-card>
			<div class="whatidong">
				<v-col cols="12" sm="12" md="12" lg="12">
					<h5 class="whatidong_text"> What I'm Doing </h5>
				</v-col>
				<v-row>
					<v-col cols="12" sm="6" md="6" lg="6" v-for="skille in skilles" :key="skille">
						<v-card flat class="skill_area">
							<v-img class="skill_images" :src="skille.img " alt=""> </v-img>
							<h3> {{skille.title}}  </h3>
							<p> {{skille.text}}  </p>
						</v-card>
					</v-col>
				</v-row>
				<v-col cols="12" sm="12" md="12" lg="12">
					<h5 class="whatidong_text"> Testimonials </h5>
					<carousel :autoplay="true" :nav="false" items="1">
						<v-item v-for="testimonial in testimonials" :key="testimonial.text">
							<div class="testimonial_cntn">
								<v-img class="testimonial_images" :src="testimonial.img" alt=""> </v-img>
								<h3> {{testimonial.title}} </h3>
								<p> {{testimonial.text}} </p>
							</div>
						</v-item>
					</carousel>
				</v-col>
			</div>
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
	  skilles: [
		  { img: "/images/icon-design.svg", title: "Web Design", text: "The most modern and high-quality design made at a professional level."},
		  { img: "/images/icon-design.svg", title: "Web Development", text: "The most modern and high-quality design made at a professional level."},
		  { img: "/images/icon-design.svg", title: "Mobile Apps Design", text: "The most modern and high-quality design made at a professional level."},
		  { img: "/images/icon-design.svg", title: "Photography", text: "The most modern and high-quality design made at a professional level."},
	  ],
	  testimonials: [
		  { img: "/images/testimonial.jpg", title: "Cliend Name", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione." },
		  { img: "/images/testimonial.jpg", title: "Cliend Name", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione." },
		  { img: "/images/testimonial.jpg", title: "Cliend Name", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione." },
	  ]
	  
  }),
};
</script>


<style scoped>
.testimonial_cntn {
	width: 100%;
	float: left;
	display: block;
	margin-top: 40px;
	position: relative;
	background: #f5f8f9;
	padding: 25px;
	border-radius: 12px;
}
.testimonial_images{
	width: 10%;
	float: left;
	border-radius: 20px;
	position: absolute;
	top: -22px;
}
.testimonial_cntn h3 {
	margin-left: 83px;
	margin-bottom: 6px;
	font-size: 18px;
	font-weight: 600;
}
element {
	width: 10%;
	position: absolute;
	top: -30px;
	border-radius: 10px;
}
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
	margin-bottom: 15px;
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

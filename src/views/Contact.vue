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
			  <section class="resume_area skilarea">
					<v-card class="education_area" flat>
						<div class="title_are pages_title">
							<v-icon class="resum_icon"> {{resumetext.icon2}} </v-icon>
							<h3 class="rsume_title">  {{resumetext.text2}} </h3>					
						</div>
					</v-card>
					<div class="education_details">
						<v-row>
							<v-col cols="12" md="12" lg="12" xl="12" flat>
								<form>
                                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>                                    
                                    <v-textarea autocomplete="text" label="Massage"></v-textarea>
                                    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
                                    <v-btn class="mr-4" @click="submit">submit</v-btn>
                                    <v-btn @click="clear">clear</v-btn>
                                </form>	
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
		  icon2: "mdi-checkerboard ",
		  text2: " Contact",
		  
	  },
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


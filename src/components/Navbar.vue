<template>
    <div class="navbar_area">
        <v-card flat class="profile_area">
          <v-img class="profile_pic" src="@/assets/images/photo.jpg" alt=""></v-img>
        </v-card>
        <p class="degainashon"> {{profileleft.title}}  </p>
        <span class="social_icon_area">
          <v-item v-for="socialicon in socialicons" :key="socialicon">
            <a :href="socialicon.url" target="_blang">
              <v-icon class="social_icon" > {{socialicon.icon}} </v-icon>
            </a>
          </v-item>
        </span>
        <v-tooltip top v-for="profileicon in profileicons" :key="profileicon">
          <template v-slot:activator="{ on }">
            <span color="primary" class="profile_icon" black v-on="on">
              <v-icon class="p_icon"> {{profileicon.icon}} </v-icon>  
              <p> {{profileicon.text}} </p>
            </span>
          </template>
          <span> {{profileicon.title}} </span>
        </v-tooltip>
        <v-btn  class="indigo darken-4 download_btn white--text">
          <v-icon left> {{profileleft.downloadicon}} </v-icon>
           {{profileleft.download}}
        </v-btn>
    </div>
</template>
<script>
export default {
  data: () => ({
    profileleft: {
      title: "FrontEnd Developer",
      download: "Download Cv",
      downloadicon: "mdi-cloud-download"
    },
    socialicons: [
      { icon: "mdi-facebook", url: "https://www.facebook.com/" },
      { icon: "mdi-linkedin", url: "https://www.linkedin.com/feed/" },
      { icon: "mdi-twitter", url: "https://twitter.com/home?lang=en" },
      { icon: "mdi-behance", url: "https://twitter.com/home?lang=en" }
    ],
    profileicons: [
      { text: "January01, 2019", title: "Birthday", icon: "mdi-calendar-today" },
      { text: "Dhaka-Khilkhet, Bangladesh", title: "Address", icon: "mdi-google-maps" },
      { text: "dulalhossain34220@gmail.com", title: "Email", icon: "mdi-email" },
      { text: "+880 198-5834220", title: "Phone", icon: "mdi-phone-forward" },
      { text: "Akm Dulal Hossain", title: "Skype", icon: "mdi-information" },
    ]
  })
}
</script>
<style scoped>
.download_btn {
  width: 100%;
  float: left;
  display: block;
  margin:30px 0;
  border-radius:30px;
}
.profile_icon {
  width: 100%;
  float: left;
  display: block;
  text-align: left;
}
.p_icon {
	font-size: 16px;
	width: 30px;
	height: 30px;
	background: #ddd;
	border-radius: 30px;
  margin-right: 12px;
  float: left;
}
.profile_icon p {
  float: left;
	font-size: 14px !important;
	margin-top: 5px;
}

.social_icon_area {
  width: 100%;
  float: left;
  display: block;
  text-align: center;
  padding: 15px 0;
}
.social_icon_area a:hover{
  color: aqua;
}
.social_icon {
  font-size: 16px;
  padding-right: 10px;
}
.degainashon {
	width: 83%;
	background: #66687d21;
	margin: auto;
	display: table;
	text-align: center;
	padding: 5px 0;
	border-radius: 41px;
	font-size: 13px;
	letter-spacing: .6px;
	color: #595959;
}
  .profile_area {
    width: 100%;
    float: left;
    display: block;
    padding: 15px 0;
  }
  .profile_area p {
    margin: auto;
    display: table;
    background: #222;
    padding: 7px 25px;
    border-radius: 50px;
  }
  .navbar_area {
    width: 100%;
    float: left;
    padding: 0 20px;
  }
  .profile_pic{
    width: 150px;
    height: 150px;
    border-radius: 150px !important;
    margin: auto;
    display: block;
  }
</style>
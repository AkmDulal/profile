<template>
    <div class="headerArea">
        <v-row no-gutters>
            <v-col cols="12" md="4">
                <v-card>
                    <div class="logo_area">
                        <h1>AKM Dulal Hossain </h1>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="8">
                <v-card>
                    <v-toolbar flat app class="header_bg">
                        <v-list>
                            <router-link to="/">
                                <span class="menu_text active"> About </span> 
                            </router-link>
                        </v-list>
                        <v-list>
                            <router-link to="/Resume">
                                <span class="menu_text"> Resume </span> 
                            </router-link>
                        </v-list>
                        <v-list>
                        <span class="menu_text"> Portfolio </span> 
                        </v-list>
                        <v-list>
                        <span class="menu_text"> Contact </span> 
                        </v-list>
                    </v-toolbar>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>

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
	border-radius: 26px 26px 0 0 !important;
	text-align: center;
}
.logo_area h1{
	font-size: 21px;
	padding: 16px;
	font-weight: 600;
	float: left;
	/* text-transform: uppercase; */
	width: 100%;
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
// require router
var router=require('express').Router();

// require all the services in that file to be matched to url
var zooRoutes=require('./zoo');
var zoneRoutes=require('./zone');
var ZoneTypeRoutes = require('./zoneType')
var ticketsRoutes=require('./ticket');
var rolesRoutes=require('./role');
var usersRoutes=require('./user');
var serviceRoutes = require('./service');
var serviceTypeRoutes = require('./serviceType');
var newsRoutes = require('./news');
var medicineRoutes = require('./medicine');
var medicineControlRoutes = require('./medicineControl');
var animalRoutes = require('./animal_Class');
var animalTypeRoutes = require('./Animal_Type');
var animalRoutes = require('./animal');
var asset_typeRoutes = require('./asset-Type');
var assetRoutes = require('./asset');
var faqRoutes = require('./FAQ');
var faqTypeRoutes = require('./FAQ_Type');
var feedbackRoutes = require('./feedback');
var feedbackTypeRoutes = require('./feedback_Type');
var feedingControlRoutes = require('./FeedingControl');
var foodRoutes = require('./Food');
var componentTypeRoutes = require('./component_Type');
var componentRoutes = require('./component');
var contacttRoutes = require('./contact');
var GenderRoutes = require('./animal-Gender');
var PreservesRoutes = require('./Eqyptian-preserve')
var StaffRoutes = require('./staff');
var StafftypeRoutes = require('./staffType');

// Handling the urls
router.use('/zoos',zooRoutes);
router.use('/zones',zoneRoutes);
router.use('/zonetypes',ZoneTypeRoutes);
router.use('/tickets',ticketsRoutes);
router.use('/roles',rolesRoutes);
router.use('/users',usersRoutes);
router.use('/services',serviceRoutes);
router.use('/servicetypes',serviceTypeRoutes);
router.use('/news',newsRoutes);
router.use('/medicine',medicineRoutes);
router.use('/medicinemanage',medicineControlRoutes);
router.use('/animalclass',animalRoutes);
router.use('/animals',animalRoutes);
router.use('/assettype',asset_typeRoutes);
router.use('/assets',assetRoutes);
router.use('/faq',faqRoutes);
router.use('/faqtype',faqTypeRoutes);
router.use('/feedback',feedbackRoutes);
router.use('/feedbacktype',feedbackTypeRoutes);
router.use('/feedingcontrol',feedingControlRoutes);
router.use('/foods',foodRoutes);
router.use('/componenttype',componentTypeRoutes);
router.use('/components',componentRoutes);
router.use('/contacts',contacttRoutes);
router.use('/animalgender',GenderRoutes);
router.use('/egyptperserves',PreservesRoutes);
router.use('/animalstype',animalTypeRoutes);
router.use('/staff',StaffRoutes);
router.use('/stafftype',StafftypeRoutes);







// export the router 
module.exports=router;

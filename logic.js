//====================================================================
//						INITIAL FUNCTIONS 
//====================================================================

function init() {
  script.log("Custom module init");
  
//Names Container >>>>>>>>>>>>>>>>>>>>>>		
	names=local.values.addContainer("Names");
		names.setCollapsed(true);
		names.addTrigger("Sync Names", "Get Names from the Console" , false);
		names.addStringParameter("First Track No", "", "");	
		for (var n = 1; n < 9; n++) {
			names.addStringParameter("Track"+n, "", ""); }
}


function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed, new value: " + param.get());
}

function moduleValueChanged(value) {
  
  if (value.name == "syncNames"){
  local.send("/1/trackname1");
  }
}

// This is the callback function for the "Custom command" command
function customCmd(val) {
  script.log("Custom command called with value " + val);
  local.parameters.moduleParam.set(val);
}

//============================================================
//							OSC EVENTS
//============================================================
function oscEvent(address, args) { 

	if (address == "/1/track#1"){
		local.values.names.firstTrackNo.set(args[0]); }
	for (var n = 1; n < 9; n++) {
		var addr = "/1/trackname"+n;	
		if (address == addr){
		var child = "Track"+n ;
		local.values.names.getChild(child).set(args[0]); } }

/*	for (var n = 1; n < 9; n++) {
		var addr2 = "/1/trackname"+n;
		var addr1 = "/1/track#"+n;
		if (address == addr1){
		var val1 = args[0]; }
		if (address == addr2){
		var val = val1+"-"+args[0];
		var child = "chanName"+n ;
		local.values.names.getChild(child).set(val); } }
*/
}


// Generic Functions

function master_volume(val)
{
	local.send("/1/mastervolume", val);
}

function volume(no, val)
{
	local.send("/1/volume"+no, val);
}

function mute(no)
{
	local.send("/1/mute/1/"+no, 1.0);
}

function solo(no, val)
{
	local.send("/1/solo/1/"+no, val);
}

function select(no, val)
{
	local.send("/1/select/1/"+no, val);
}

function solo_reset()
{
	local.send("/1/soloreset", 1.0);
}

function play()
{
	local.send("/1/play", 1.0);
}

function stop()
{
	local.send("/1/stop", 1.0);
}

function cycle()
{
	local.send("/1/cycle", 1.0);
}

function rec()
{
	local.send("/1/rec", 1.0);
}

function click()
{
	local.send("/1/click", 1.0);
}

function rwind()
{
	local.send("/1/rewind", 1.0);
}

function forward()
{
	local.send("/1/forward", 1.0);
}

function bank_back()
{
	local.send("/1/bank-", 1.0);
}

function bank_next()
{
	local.send("/1/bank+", 1.0);
}



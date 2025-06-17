gdjs.GMCode = {};
gdjs.GMCode.localVariables = [];
gdjs.GMCode.GDHora_9595INPTObjects1= [];
gdjs.GMCode.GDHora_9595INPTObjects2= [];
gdjs.GMCode.GDHora_9595INPTObjects3= [];
gdjs.GMCode.GDHora_9595INPTObjects4= [];
gdjs.GMCode.GDMin_9595INPTObjects1= [];
gdjs.GMCode.GDMin_9595INPTObjects2= [];
gdjs.GMCode.GDMin_9595INPTObjects3= [];
gdjs.GMCode.GDMin_9595INPTObjects4= [];
gdjs.GMCode.GDOk_9595TimeObjects1= [];
gdjs.GMCode.GDOk_9595TimeObjects2= [];
gdjs.GMCode.GDOk_9595TimeObjects3= [];
gdjs.GMCode.GDOk_9595TimeObjects4= [];
gdjs.GMCode.GDVouchersObjects1= [];
gdjs.GMCode.GDVouchersObjects2= [];
gdjs.GMCode.GDVouchersObjects3= [];
gdjs.GMCode.GDVouchersObjects4= [];
gdjs.GMCode.GDMudar_9595voucherObjects1= [];
gdjs.GMCode.GDMudar_9595voucherObjects2= [];
gdjs.GMCode.GDMudar_9595voucherObjects3= [];
gdjs.GMCode.GDMudar_9595voucherObjects4= [];
gdjs.GMCode.GDAdamastorObjects1= [];
gdjs.GMCode.GDAdamastorObjects2= [];
gdjs.GMCode.GDAdamastorObjects3= [];
gdjs.GMCode.GDAdamastorObjects4= [];
gdjs.GMCode.GDFacilObjects1= [];
gdjs.GMCode.GDFacilObjects2= [];
gdjs.GMCode.GDFacilObjects3= [];
gdjs.GMCode.GDFacilObjects4= [];
gdjs.GMCode.GDGinjinhaObjects1= [];
gdjs.GMCode.GDGinjinhaObjects2= [];
gdjs.GMCode.GDGinjinhaObjects3= [];
gdjs.GMCode.GDGinjinhaObjects4= [];
gdjs.GMCode.GDRevelacoesObjects1= [];
gdjs.GMCode.GDRevelacoesObjects2= [];
gdjs.GMCode.GDRevelacoesObjects3= [];
gdjs.GMCode.GDRevelacoesObjects4= [];
gdjs.GMCode.GDCleanObjects1= [];
gdjs.GMCode.GDCleanObjects2= [];
gdjs.GMCode.GDCleanObjects3= [];
gdjs.GMCode.GDCleanObjects4= [];
gdjs.GMCode.GDLeaderboardObjects1= [];
gdjs.GMCode.GDLeaderboardObjects2= [];
gdjs.GMCode.GDLeaderboardObjects3= [];
gdjs.GMCode.GDLeaderboardObjects4= [];
gdjs.GMCode.GDMudar_9595LeaderboardObjects1= [];
gdjs.GMCode.GDMudar_9595LeaderboardObjects2= [];
gdjs.GMCode.GDMudar_9595LeaderboardObjects3= [];
gdjs.GMCode.GDMudar_9595LeaderboardObjects4= [];
gdjs.GMCode.GDHora_9595TXTObjects1= [];
gdjs.GMCode.GDHora_9595TXTObjects2= [];
gdjs.GMCode.GDHora_9595TXTObjects3= [];
gdjs.GMCode.GDHora_9595TXTObjects4= [];
gdjs.GMCode.GDfundoObjects1= [];
gdjs.GMCode.GDfundoObjects2= [];
gdjs.GMCode.GDfundoObjects3= [];
gdjs.GMCode.GDfundoObjects4= [];
gdjs.GMCode.GDequipaObjects1= [];
gdjs.GMCode.GDequipaObjects2= [];
gdjs.GMCode.GDequipaObjects3= [];
gdjs.GMCode.GDequipaObjects4= [];
gdjs.GMCode.GDEquipasObjects1= [];
gdjs.GMCode.GDEquipasObjects2= [];
gdjs.GMCode.GDEquipasObjects3= [];
gdjs.GMCode.GDEquipasObjects4= [];
gdjs.GMCode.GDEquipas2Objects1= [];
gdjs.GMCode.GDEquipas2Objects2= [];
gdjs.GMCode.GDEquipas2Objects3= [];
gdjs.GMCode.GDEquipas2Objects4= [];


gdjs.GMCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "ambos");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects3);
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "bacalhau");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects3);
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "manteigaria");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects3);
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects3[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "not selected");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects3);
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects3[i].getBehavior("Animation").setAnimationIndex(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "6d805aca-cbda-49ef-8d4f-f0d2c2810cb4");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "96a8a0f3-2645-43db-a83a-c6c91191689b");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}}

}


};gdjs.GMCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10276156);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GMCode.asyncCallback10275700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GMCode.localVariables);

{ //Subevents
gdjs.GMCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GMCode.localVariables.length = 0;
}
gdjs.GMCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GMCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GMCode.asyncCallback10275700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GMCode.asyncCallback10289356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GMCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Hora_INPT"), gdjs.GMCode.GDHora_9595INPTObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Min_INPT"), gdjs.GMCode.GDMin_9595INPTObjects2);

{for(var i = 0, len = gdjs.GMCode.GDHora_9595INPTObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDHora_9595INPTObjects2[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.GMCode.GDMin_9595INPTObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDMin_9595INPTObjects2[i].getBehavior("Text").setText("");
}
}gdjs.GMCode.localVariables.length = 0;
}
gdjs.GMCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GMCode.localVariables);
for (const obj of gdjs.GMCode.GDHora_9595INPTObjects1) asyncObjectsList.addObject("Hora_INPT", obj);
for (const obj of gdjs.GMCode.GDMin_9595INPTObjects1) asyncObjectsList.addObject("Min_INPT", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GMCode.asyncCallback10289356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GMCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10280228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Voucher", "Status", "ambos", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10261972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Voucher", "Status", "bacalhau", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10275300);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Voucher", "Status", "manteigaria", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10285020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Voucher", "Status", "not selected", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDVouchersObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDVouchersObjects2[i].getBehavior("Animation").getAnimationIndex() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDVouchersObjects2[k] = gdjs.GMCode.GDVouchersObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDVouchersObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GMCode.GDVouchersObjects2 */
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDVouchersObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDVouchersObjects2[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDVouchersObjects2[k] = gdjs.GMCode.GDVouchersObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDVouchersObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDVouchersObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDVouchersObjects2[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDVouchersObjects2[k] = gdjs.GMCode.GDVouchersObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDVouchersObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDVouchersObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDVouchersObjects2[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDVouchersObjects2[k] = gdjs.GMCode.GDVouchersObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDVouchersObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDVouchersObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDVouchersObjects1[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDVouchersObjects1[k] = gdjs.GMCode.GDVouchersObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDVouchersObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GMCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Adamastor"), gdjs.GMCode.GDAdamastorObjects3);
{for(var i = 0, len = gdjs.GMCode.GDAdamastorObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDAdamastorObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Adamastor"), gdjs.GMCode.GDAdamastorObjects3);
{for(var i = 0, len = gdjs.GMCode.GDAdamastorObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDAdamastorObjects3[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Facil"), gdjs.GMCode.GDFacilObjects3);
{for(var i = 0, len = gdjs.GMCode.GDFacilObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDFacilObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Facil"), gdjs.GMCode.GDFacilObjects3);
{for(var i = 0, len = gdjs.GMCode.GDFacilObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDFacilObjects3[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ginjinha"), gdjs.GMCode.GDGinjinhaObjects3);
{for(var i = 0, len = gdjs.GMCode.GDGinjinhaObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDGinjinhaObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ginjinha"), gdjs.GMCode.GDGinjinhaObjects3);
{for(var i = 0, len = gdjs.GMCode.GDGinjinhaObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDGinjinhaObjects3[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Revelacoes"), gdjs.GMCode.GDRevelacoesObjects3);
{for(var i = 0, len = gdjs.GMCode.GDRevelacoesObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDRevelacoesObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Revelacoes"), gdjs.GMCode.GDRevelacoesObjects2);
{for(var i = 0, len = gdjs.GMCode.GDRevelacoesObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDRevelacoesObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GMCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24615156);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GMCode.asyncCallback24614740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GMCode.localVariables);

{ //Subevents
gdjs.GMCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GMCode.localVariables.length = 0;
}
gdjs.GMCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GMCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GMCode.asyncCallback24614740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GMCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "6d805aca-cbda-49ef-8d4f-f0d2c2810cb4");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "96a8a0f3-2645-43db-a83a-c6c91191689b");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects3);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects3[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects2.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}}

}


};gdjs.GMCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24632156);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GMCode.asyncCallback24631724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GMCode.localVariables);

{ //Subevents
gdjs.GMCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GMCode.localVariables.length = 0;
}
gdjs.GMCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GMCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GMCode.asyncCallback24631724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GMCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24641004);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24642964);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "6d805aca-cbda-49ef-8d4f-f0d2c2810cb4", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24644948);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "96a8a0f3-2645-43db-a83a-c6c91191689b", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24646924);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GMCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDLeaderboardObjects2[k] = gdjs.GMCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDLeaderboardObjects2[k] = gdjs.GMCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDLeaderboardObjects2[k] = gdjs.GMCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.GMCode.GDLeaderboardObjects2[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDLeaderboardObjects2[k] = gdjs.GMCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.GMCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDLeaderboardObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDLeaderboardObjects1[i].getBehavior("Animation").getAnimationIndex() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDLeaderboardObjects1[k] = gdjs.GMCode.GDLeaderboardObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDLeaderboardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GMCode.GDLeaderboardObjects1 */
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects1.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


};gdjs.GMCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.firebaseTools.database.getField("Voucher", "Status", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animations");
}
{ //Subevents
gdjs.GMCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hora_TXT"), gdjs.GMCode.GDHora_9595TXTObjects1);
{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.GMCode.GDHora_9595TXTObjects1.length ;i < len;++i) {
    gdjs.GMCode.GDHora_9595TXTObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + ":" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ok_Time"), gdjs.GMCode.GDOk_9595TimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDOk_9595TimeObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDOk_9595TimeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDOk_9595TimeObjects1[k] = gdjs.GMCode.GDOk_9595TimeObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDOk_9595TimeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hora_INPT"), gdjs.GMCode.GDHora_9595INPTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Min_INPT"), gdjs.GMCode.GDMin_9595INPTObjects1);
{gdjs.evtTools.firebaseTools.database.updateField("Timer", "Hour", (( gdjs.GMCode.GDHora_9595INPTObjects1.length === 0 ) ? "" :gdjs.GMCode.GDHora_9595INPTObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Timer", "Minute", (( gdjs.GMCode.GDMin_9595INPTObjects1.length === 0 ) ? "" :gdjs.GMCode.GDMin_9595INPTObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.GMCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mudar_voucher"), gdjs.GMCode.GDMudar_9595voucherObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDMudar_9595voucherObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDMudar_9595voucherObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDMudar_9595voucherObjects1[k] = gdjs.GMCode.GDMudar_9595voucherObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDMudar_9595voucherObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vouchers"), gdjs.GMCode.GDVouchersObjects1);
{for(var i = 0, len = gdjs.GMCode.GDVouchersObjects1.length ;i < len;++i) {
    gdjs.GMCode.GDVouchersObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.GMCode.GDVouchersObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "animations") >= 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("Optional", "Adamastor", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Easy", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Ginja", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Revelations", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.GMCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Adamastor"), gdjs.GMCode.GDAdamastorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDAdamastorObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDAdamastorObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDAdamastorObjects1[k] = gdjs.GMCode.GDAdamastorObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDAdamastorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Adamastor", "1", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Adamastor"), gdjs.GMCode.GDAdamastorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDAdamastorObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDAdamastorObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDAdamastorObjects1[k] = gdjs.GMCode.GDAdamastorObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDAdamastorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Adamastor", "0", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Facil"), gdjs.GMCode.GDFacilObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDFacilObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDFacilObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDFacilObjects1[k] = gdjs.GMCode.GDFacilObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDFacilObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Easy", "1", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Facil"), gdjs.GMCode.GDFacilObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDFacilObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDFacilObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDFacilObjects1[k] = gdjs.GMCode.GDFacilObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDFacilObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Easy", "0", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ginjinha"), gdjs.GMCode.GDGinjinhaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDGinjinhaObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDGinjinhaObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDGinjinhaObjects1[k] = gdjs.GMCode.GDGinjinhaObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDGinjinhaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Ginja", "1", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ginjinha"), gdjs.GMCode.GDGinjinhaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDGinjinhaObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDGinjinhaObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDGinjinhaObjects1[k] = gdjs.GMCode.GDGinjinhaObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDGinjinhaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Ginja", "0", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Revelacoes"), gdjs.GMCode.GDRevelacoesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDRevelacoesObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDRevelacoesObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDRevelacoesObjects1[k] = gdjs.GMCode.GDRevelacoesObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDRevelacoesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Revelations", "1", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Revelacoes"), gdjs.GMCode.GDRevelacoesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDRevelacoesObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDRevelacoesObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDRevelacoesObjects1[k] = gdjs.GMCode.GDRevelacoesObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDRevelacoesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Optional", "Revelations", "0", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mudar_Leaderboard"), gdjs.GMCode.GDMudar_9595LeaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDMudar_9595LeaderboardObjects1[i].IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDMudar_9595LeaderboardObjects1[k] = gdjs.GMCode.GDMudar_9595LeaderboardObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.GMCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mudar_Leaderboard"), gdjs.GMCode.GDMudar_9595LeaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDMudar_9595LeaderboardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDMudar_9595LeaderboardObjects1[k] = gdjs.GMCode.GDMudar_9595LeaderboardObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GMCode.GDLeaderboardObjects1);
{for(var i = 0, len = gdjs.GMCode.GDLeaderboardObjects1.length ;i < len;++i) {
    gdjs.GMCode.GDLeaderboardObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.GMCode.GDLeaderboardObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "animations") >= 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GMCode.eventsList19(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Clean"), gdjs.GMCode.GDCleanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDCleanObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDCleanObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDCleanObjects1[k] = gdjs.GMCode.GDCleanObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDCleanObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Lusiadas", "Status", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Voucher", "Status", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Hack", "Status", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Timer", "Hour", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Timer", "Minute", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Amarela", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Amarela_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Azul", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Azul_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Castanha", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Branca_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Rosa", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Roxa", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Roxa_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Verde", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Verde_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "VerdeClara_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "AzulClara", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "AzulClara_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Vermelha", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("UID", "Vermelha_Preta", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField("Leaderboard", "ID", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(7).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.deleteVariable(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Equipas"), gdjs.GMCode.GDEquipasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDEquipasObjects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDEquipasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDEquipasObjects1[k] = gdjs.GMCode.GDEquipasObjects1[i];
        ++k;
    }
}
gdjs.GMCode.GDEquipasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Geral Equipas");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Equipas2"), gdjs.GMCode.GDEquipas2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GMCode.GDEquipas2Objects1.length;i<l;++i) {
    if ( gdjs.GMCode.GDEquipas2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GMCode.GDEquipas2Objects1[k] = gdjs.GMCode.GDEquipas2Objects1[i];
        ++k;
    }
}
gdjs.GMCode.GDEquipas2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Geral Equipas2");
}}

}


};

gdjs.GMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GMCode.GDHora_9595INPTObjects1.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects2.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects3.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects4.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects1.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects2.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects3.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects4.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects1.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects2.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects3.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects4.length = 0;
gdjs.GMCode.GDVouchersObjects1.length = 0;
gdjs.GMCode.GDVouchersObjects2.length = 0;
gdjs.GMCode.GDVouchersObjects3.length = 0;
gdjs.GMCode.GDVouchersObjects4.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects1.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects2.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects3.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects4.length = 0;
gdjs.GMCode.GDAdamastorObjects1.length = 0;
gdjs.GMCode.GDAdamastorObjects2.length = 0;
gdjs.GMCode.GDAdamastorObjects3.length = 0;
gdjs.GMCode.GDAdamastorObjects4.length = 0;
gdjs.GMCode.GDFacilObjects1.length = 0;
gdjs.GMCode.GDFacilObjects2.length = 0;
gdjs.GMCode.GDFacilObjects3.length = 0;
gdjs.GMCode.GDFacilObjects4.length = 0;
gdjs.GMCode.GDGinjinhaObjects1.length = 0;
gdjs.GMCode.GDGinjinhaObjects2.length = 0;
gdjs.GMCode.GDGinjinhaObjects3.length = 0;
gdjs.GMCode.GDGinjinhaObjects4.length = 0;
gdjs.GMCode.GDRevelacoesObjects1.length = 0;
gdjs.GMCode.GDRevelacoesObjects2.length = 0;
gdjs.GMCode.GDRevelacoesObjects3.length = 0;
gdjs.GMCode.GDRevelacoesObjects4.length = 0;
gdjs.GMCode.GDCleanObjects1.length = 0;
gdjs.GMCode.GDCleanObjects2.length = 0;
gdjs.GMCode.GDCleanObjects3.length = 0;
gdjs.GMCode.GDCleanObjects4.length = 0;
gdjs.GMCode.GDLeaderboardObjects1.length = 0;
gdjs.GMCode.GDLeaderboardObjects2.length = 0;
gdjs.GMCode.GDLeaderboardObjects3.length = 0;
gdjs.GMCode.GDLeaderboardObjects4.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects2.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects3.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects4.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects1.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects2.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects3.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects4.length = 0;
gdjs.GMCode.GDfundoObjects1.length = 0;
gdjs.GMCode.GDfundoObjects2.length = 0;
gdjs.GMCode.GDfundoObjects3.length = 0;
gdjs.GMCode.GDfundoObjects4.length = 0;
gdjs.GMCode.GDequipaObjects1.length = 0;
gdjs.GMCode.GDequipaObjects2.length = 0;
gdjs.GMCode.GDequipaObjects3.length = 0;
gdjs.GMCode.GDequipaObjects4.length = 0;
gdjs.GMCode.GDEquipasObjects1.length = 0;
gdjs.GMCode.GDEquipasObjects2.length = 0;
gdjs.GMCode.GDEquipasObjects3.length = 0;
gdjs.GMCode.GDEquipasObjects4.length = 0;
gdjs.GMCode.GDEquipas2Objects1.length = 0;
gdjs.GMCode.GDEquipas2Objects2.length = 0;
gdjs.GMCode.GDEquipas2Objects3.length = 0;
gdjs.GMCode.GDEquipas2Objects4.length = 0;

gdjs.GMCode.eventsList20(runtimeScene);
gdjs.GMCode.GDHora_9595INPTObjects1.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects2.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects3.length = 0;
gdjs.GMCode.GDHora_9595INPTObjects4.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects1.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects2.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects3.length = 0;
gdjs.GMCode.GDMin_9595INPTObjects4.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects1.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects2.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects3.length = 0;
gdjs.GMCode.GDOk_9595TimeObjects4.length = 0;
gdjs.GMCode.GDVouchersObjects1.length = 0;
gdjs.GMCode.GDVouchersObjects2.length = 0;
gdjs.GMCode.GDVouchersObjects3.length = 0;
gdjs.GMCode.GDVouchersObjects4.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects1.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects2.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects3.length = 0;
gdjs.GMCode.GDMudar_9595voucherObjects4.length = 0;
gdjs.GMCode.GDAdamastorObjects1.length = 0;
gdjs.GMCode.GDAdamastorObjects2.length = 0;
gdjs.GMCode.GDAdamastorObjects3.length = 0;
gdjs.GMCode.GDAdamastorObjects4.length = 0;
gdjs.GMCode.GDFacilObjects1.length = 0;
gdjs.GMCode.GDFacilObjects2.length = 0;
gdjs.GMCode.GDFacilObjects3.length = 0;
gdjs.GMCode.GDFacilObjects4.length = 0;
gdjs.GMCode.GDGinjinhaObjects1.length = 0;
gdjs.GMCode.GDGinjinhaObjects2.length = 0;
gdjs.GMCode.GDGinjinhaObjects3.length = 0;
gdjs.GMCode.GDGinjinhaObjects4.length = 0;
gdjs.GMCode.GDRevelacoesObjects1.length = 0;
gdjs.GMCode.GDRevelacoesObjects2.length = 0;
gdjs.GMCode.GDRevelacoesObjects3.length = 0;
gdjs.GMCode.GDRevelacoesObjects4.length = 0;
gdjs.GMCode.GDCleanObjects1.length = 0;
gdjs.GMCode.GDCleanObjects2.length = 0;
gdjs.GMCode.GDCleanObjects3.length = 0;
gdjs.GMCode.GDCleanObjects4.length = 0;
gdjs.GMCode.GDLeaderboardObjects1.length = 0;
gdjs.GMCode.GDLeaderboardObjects2.length = 0;
gdjs.GMCode.GDLeaderboardObjects3.length = 0;
gdjs.GMCode.GDLeaderboardObjects4.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects1.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects2.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects3.length = 0;
gdjs.GMCode.GDMudar_9595LeaderboardObjects4.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects1.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects2.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects3.length = 0;
gdjs.GMCode.GDHora_9595TXTObjects4.length = 0;
gdjs.GMCode.GDfundoObjects1.length = 0;
gdjs.GMCode.GDfundoObjects2.length = 0;
gdjs.GMCode.GDfundoObjects3.length = 0;
gdjs.GMCode.GDfundoObjects4.length = 0;
gdjs.GMCode.GDequipaObjects1.length = 0;
gdjs.GMCode.GDequipaObjects2.length = 0;
gdjs.GMCode.GDequipaObjects3.length = 0;
gdjs.GMCode.GDequipaObjects4.length = 0;
gdjs.GMCode.GDEquipasObjects1.length = 0;
gdjs.GMCode.GDEquipasObjects2.length = 0;
gdjs.GMCode.GDEquipasObjects3.length = 0;
gdjs.GMCode.GDEquipasObjects4.length = 0;
gdjs.GMCode.GDEquipas2Objects1.length = 0;
gdjs.GMCode.GDEquipas2Objects2.length = 0;
gdjs.GMCode.GDEquipas2Objects3.length = 0;
gdjs.GMCode.GDEquipas2Objects4.length = 0;


return;

}

gdjs['GMCode'] = gdjs.GMCode;

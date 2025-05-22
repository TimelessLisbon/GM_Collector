gdjs.Eq_46_32AzulClaraCode = {};
gdjs.Eq_46_32AzulClaraCode.localVariables = [];
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDnextObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDnextObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDnextObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDnextObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDBackObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDBackObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDBackObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDBackObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects4= [];
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1= [];
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects2= [];
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects3= [];
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects4= [];


gdjs.Eq_46_32AzulClaraCode.asyncCallback18701380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Eq_46_32AzulClaraCode.localVariables);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Next", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}gdjs.Eq_46_32AzulClaraCode.localVariables.length = 0;
}
gdjs.Eq_46_32AzulClaraCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Eq_46_32AzulClaraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Eq_46_32AzulClaraCode.asyncCallback18701380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Eq_46_32AzulClaraCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() == "encontrado");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Eq_46_32AzulClaraCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18079116);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Eq_46_32AzulClaraCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Eq_46_32AzulClaraCode.asyncCallback11119036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Eq_46_32AzulClaraCode.localVariables);

{ //Subevents
gdjs.Eq_46_32AzulClaraCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Eq_46_32AzulClaraCode.localVariables.length = 0;
}
gdjs.Eq_46_32AzulClaraCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Eq_46_32AzulClaraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Eq_46_32AzulClaraCode.asyncCallback11119036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Eq_46_32AzulClaraCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Team", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "EstadoClueGM", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Pedro Alcantara Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("846");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Entrada");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CRUZADAS/CROSSWORDS/CROISÉS");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Cruzadas 1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CAUTELEIRO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Cruzadas 2");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("PADRE/PRIEST/PRÊTRE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Carmo Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("7961");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Brasileira Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("ANDRESSA LIMA");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Manteigaria Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CRIATIVIDADE/CREATIVITY/CRÉATIVITÉ");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Bica Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("VERSUS");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Camoes Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("Quevedo; F. Lopes; Castanhede");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Carlos");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("6532//LIVRO/BOOK/LIVRE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "S. Pedro Alcantara Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "S. Roque Entrada");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "S. Roque Cruzadas 1");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "S. Roque Cruzadas 2");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Carmo Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Brasileira Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Manteigaria Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Bica Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Camoes Enigma");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "S. Carlos");
}
}
}
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Estado_Pista_txt"), gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResumoBB"), gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1);
gdjs.copyArray(runtimeScene.getObjects("Team_Name"), gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1[i].setBBText("[b][color=lightblue][size=43]Local:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=lightblue][size=43]Rsp:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=lightblue][size=43]Erros:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enviar"), gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PistaGM"), gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "ClueGM_NT", (( gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1.length === 0 ) ? "" :gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("mudar_lng"), gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[i].IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mudar_lng"), gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lingua"), gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Eq_46_32AzulClaraCode.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDnextObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDnextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDnextObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDnextObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDnextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Next", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{ //Subevents
gdjs.Eq_46_32AzulClaraCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Lusiadas", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{ //Subevents
gdjs.Eq_46_32AzulClaraCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Lusiadas", "encontrado", runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.updateField("Lusiadas", "Status", "encontrado", runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), "Lusiadas", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.updateField("Lusiadas", "Status", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Eq_46_32AzulClaraCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32AzulClaraCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32AzulClaraCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32AzulClaraCode.GDBackObjects1[k] = gdjs.Eq_46_32AzulClaraCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32AzulClaraCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Geral Equipas", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ResumoBB"), gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Team_Name"), gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1);
{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].setWrappingWidth(565);
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1[i].setWrappingWidth(450);
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1[i].setWrappingWidth(565);
}
}}

}


};

gdjs.Eq_46_32AzulClaraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects4.length = 0;

gdjs.Eq_46_32AzulClaraCode.eventsList4(runtimeScene);
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDRsp_9595CertaObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDTeam_9595NameObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDPistaGMObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDenviarObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDnextObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDmudar_9595lngObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlusiadasObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDlinguaObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDEstado_9595Pista_9595txtObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDBackObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDfundoObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDgeral_9595equipasObjects4.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects1.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects2.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects3.length = 0;
gdjs.Eq_46_32AzulClaraCode.GDResumoBBObjects4.length = 0;


return;

}

gdjs['Eq_46_32AzulClaraCode'] = gdjs.Eq_46_32AzulClaraCode;

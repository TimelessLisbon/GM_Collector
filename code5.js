gdjs.Eq_46_32VerdeClaraCode = {};
gdjs.Eq_46_32VerdeClaraCode.localVariables = [];
gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects2= [];
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1= [];
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects2= [];


gdjs.Eq_46_32VerdeClaraCode.asyncCallback20435108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Eq_46_32VerdeClaraCode.localVariables);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Next", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}gdjs.Eq_46_32VerdeClaraCode.localVariables.length = 0;
}
gdjs.Eq_46_32VerdeClaraCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Eq_46_32VerdeClaraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Eq_46_32VerdeClaraCode.asyncCallback20435108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Eq_46_32VerdeClaraCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Team", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "EstadoClueGM", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(7));
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
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("846");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Entrada");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CRUZADAS/CROSSWORDS/CROISÉS");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Cruzadas 1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CAUTELEIRO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Roque Cruzadas 2");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("PADRE/PRIEST/PRÊTRE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Carmo Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("7961");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Brasileira Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("ANDRESSA LIMA");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Manteigaria Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("CRIATIVIDADE/CREATIVITY/CRÉATIVITÉ");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Bica Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("VERSUS");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Camoes Enigma");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("Quevedo; F. Lopes; Castanhede");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "S. Carlos");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("6532//LIVRO/BOOK/LIVRE");
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
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].getBehavior("Text").setText("");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Estado_Pista_txt"), gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResumoBB"), gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1);
gdjs.copyArray(runtimeScene.getObjects("Team_Name"), gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1[i].setBBText("[b][color=lightgreen][size=43]Local:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=lightgreen][size=43]Rsp:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=lightgreen][size=43]Erros:[/size][/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enviar"), gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PistaGM"), gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1);
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "ClueGM_NT", (( gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1.length === 0 ) ? "" :gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("mudar_lng"), gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[i].IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mudar_lng"), gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lingua"), gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
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
}{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Language", runtimeScene.getScene().getVariables().getFromIndex(6).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Next", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{ //Subevents
gdjs.Eq_46_32VerdeClaraCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Lusiadas", "encontrado", runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.updateField("Lusiadas", "Status", "encontrado", runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lusiadas"), gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), "Lusiadas", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}{gdjs.evtTools.firebaseTools.database.updateField("Lusiadas", "Status", "", runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1[k] = gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Geral Equipas", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ResumoBB"), gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rsp_Certa"), gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Team_Name"), gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1);
{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].setWrappingWidth(565);
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1[i].setWrappingWidth(450);
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1[i].setWrappingWidth(565);
}
}{for(var i = 0, len = gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1.length ;i < len;++i) {
    gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1[i].setWrapping(true);
}
}}

}


};

gdjs.Eq_46_32VerdeClaraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects2.length = 0;

gdjs.Eq_46_32VerdeClaraCode.eventsList1(runtimeScene);
gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDRsp_9595CertaObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDTeam_9595NameObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDPistaGMObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDenviarObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDnextObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDmudar_9595lngObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlusiadasObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDlinguaObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDEstado_9595Pista_9595txtObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDBackObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDfundoObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDgeral_9595equipasObjects2.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects1.length = 0;
gdjs.Eq_46_32VerdeClaraCode.GDResumoBBObjects2.length = 0;


return;

}

gdjs['Eq_46_32VerdeClaraCode'] = gdjs.Eq_46_32VerdeClaraCode;

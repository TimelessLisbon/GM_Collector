gdjs.Geral_32Equipas2Code = {};
gdjs.Geral_32Equipas2Code.localVariables = [];
gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1= [];
gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects2= [];
gdjs.Geral_32Equipas2Code.GDhackObjects1= [];
gdjs.Geral_32Equipas2Code.GDhackObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects2= [];
gdjs.Geral_32Equipas2Code.GDhomeObjects1= [];
gdjs.Geral_32Equipas2Code.GDhomeObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects2= [];
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1= [];
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects2= [];
gdjs.Geral_32Equipas2Code.GDfundoObjects1= [];
gdjs.Geral_32Equipas2Code.GDfundoObjects2= [];
gdjs.Geral_32Equipas2Code.GDhome2Objects1= [];
gdjs.Geral_32Equipas2Code.GDhome2Objects2= [];
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects2= [];
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1= [];
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects2= [];


gdjs.Geral_32Equipas2Code.asyncCallback12083884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Geral_32Equipas2Code.localVariables);
{gdjs.evtTools.firebaseTools.database.getField("Hack", "Status", runtimeScene.getScene().getVariables().getFromIndex(41), runtimeScene.getScene().getVariables().getFromIndex(0));
}gdjs.Geral_32Equipas2Code.localVariables.length = 0;
}
gdjs.Geral_32Equipas2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Geral_32Equipas2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Geral_32Equipas2Code.asyncCallback12083884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Geral_32Equipas2Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela_Preta", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul_Preta", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Branca_Preta", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa_Preta", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "VerdeClara_Preta", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde_Preta", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "AzulClara_Preta", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Vermelha_Preta", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(17), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(33), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(25), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(18), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(26), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(34), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(11), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(19), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(27), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(35), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(12), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(20), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(28), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(36), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(13), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(21), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(29), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(37), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(22), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(30), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(38), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setString(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(15), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(23), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(31), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(39), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() != "0");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() != "");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString(), "Track", runtimeScene.getScene().getVariables().getFromIndex(16), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString(), "Score", runtimeScene.getScene().getVariables().getFromIndex(24), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString(), "Answer", runtimeScene.getScene().getVariables().getFromIndex(32), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(40), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("amarela_BBtxt"), gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("azul_BBtxt"), gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("azulclara_BBtxt"), gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("castanha_BBtxt"), gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("rosa_BBtxt"), gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("roxa_BBtxt"), gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("verde_BBtxt"), gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("vermelha_BBtxt"), gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1);
{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1[i].setBBText("[outline=black][b][color=yellow]Loc:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() + "  [outline=black][b][color=yellow]S:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(17).getAsString() + gdjs.evtTools.string.newLine() + "[outline=black][b][color=yellow]Rsp:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(25).getAsString() + "  [outline=black][b][color=yellow]Erros:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(33).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1[i].setBBText("[b][color=#00008B]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() + "  [b][color=#00008B]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(18).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=#00008B]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(26).getAsString() + "  [b][color=#00008B]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(34).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1[i].setBBText("[outline=black][b][color=white]Loc:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(11).getAsString() + "  [outline=black][b][color=white]S:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(19).getAsString() + gdjs.evtTools.string.newLine() + "[outline=black][b][color=white]Rsp:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(27).getAsString() + "  [outline=black][b][color=white]Erros:[/color][/b][/outline] " + runtimeScene.getScene().getVariables().getFromIndex(35).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1[i].setBBText("[b][color=purple]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() + "  [b][color=purple]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(20).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=purple]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(28).getAsString() + "  [b][color=purple]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(36).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1[i].setBBText("[b][color=lightgreen]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() + "  [b][color=lightgreen]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(21).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=lightgreen]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(29).getAsString() + "  [b][color=lightgreen]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(37).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1[i].setBBText("[b][color=#006400]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(14).getAsString() + "  [b][color=#006400]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(22).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=#006400]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(30).getAsString() + "  [b][color=#006400]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(38).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1[i].setBBText("[b][color=#ADD8E6]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "  [b][color=#ADD8E6]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(23).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=#ADD8E6]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(31).getAsString() + "  [b][color=#ADD8E6]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(39).getAsString());
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1[i].setBBText("[b][color=red]Loc:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(16).getAsString() + "  [b][color=red]S:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(24).getAsString() + gdjs.evtTools.string.newLine() + "[b][color=red]Rsp:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(32).getAsString() + "  [b][color=red]Erros:[/color][/b] " + runtimeScene.getScene().getVariables().getFromIndex(40).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("amarela_BBtxt"), gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("azul_BBtxt"), gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("azulclara_BBtxt"), gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("castanha_BBtxt"), gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("rosa_BBtxt"), gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("roxa_BBtxt"), gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("verde_BBtxt"), gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("vermelha_BBtxt"), gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1);
{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1[i].setWrappingWidth(454);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.Geral_32Equipas2Code.GDhomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDhomeObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDhomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDhomeObjects1[k] = gdjs.Geral_32Equipas2Code.GDhomeObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDhomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_amarela"), gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Amarela_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_azul"), gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Azul_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_castanha"), gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Branca_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_rosa"), gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Roxa_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_roxa"), gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. VerdeClara_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_verde"), gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Verde_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_azulclara"), gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. AzulClara_Preta", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ir_vermelha"), gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1[k] = gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Eq. Vermelha_Preta", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("hack"), gdjs.Geral_32Equipas2Code.GDhackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDhackObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDhackObjects1[i].IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDhackObjects1[k] = gdjs.Geral_32Equipas2Code.GDhackObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDhackObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Geral_32Equipas2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("hack"), gdjs.Geral_32Equipas2Code.GDhackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Geral_32Equipas2Code.GDhackObjects1.length;i<l;++i) {
    if ( gdjs.Geral_32Equipas2Code.GDhackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Geral_32Equipas2Code.GDhackObjects1[k] = gdjs.Geral_32Equipas2Code.GDhackObjects1[i];
        ++k;
    }
}
gdjs.Geral_32Equipas2Code.GDhackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Hack", "Status", "1", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hack_Status"), gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1);
{for(var i = 0, len = gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1.length ;i < len;++i) {
    gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(41).getAsNumber());
}
}}

}


};

gdjs.Geral_32Equipas2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhackObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhackObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhomeObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhomeObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDfundoObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDfundoObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhome2Objects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhome2Objects2.length = 0;
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects2.length = 0;

gdjs.Geral_32Equipas2Code.eventsList1(runtimeScene);
gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDHack_9595StatusObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhackObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhackObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595amarelaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhomeObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhomeObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595castanhaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595rosaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595roxaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595verdeObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595azulclaraObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDir_9595vermelhaObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDfundoObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDfundoObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDhome2Objects1.length = 0;
gdjs.Geral_32Equipas2Code.GDhome2Objects2.length = 0;
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDamarela_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDazul_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDcastanha_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDrosa_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDroxa_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDverde_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDazulclara_9595BBtxtObjects2.length = 0;
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects1.length = 0;
gdjs.Geral_32Equipas2Code.GDvermelha_9595BBtxtObjects2.length = 0;


return;

}

gdjs['Geral_32Equipas2Code'] = gdjs.Geral_32Equipas2Code;

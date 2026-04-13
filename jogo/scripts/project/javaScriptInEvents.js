

const scriptsInEvents = {

	async FolhaJogo_Event11_Act4(runtime, localVars)
	{
		let uvinha = runtime.globalVars.uva;
		uvinha ++;
		runtime.globalVars.uva = uvinha
		if(uvinha>=28){
			runtime.goToLayout("vitoria");
		}
	},

	async FolhaJogo_Event12_Act2(runtime, localVars)
	{
		//OBTER O VALOR DA VARIAVEL VIDAS
		let vida = runtime.globalVars.coracao;
		//REDUZ UMA VIDA
		vida --;
		//ATUALIZA A VARIAVEL GLOBAL
		runtime.globalVars.coracao = vida;
		//SE A VARIAVEL VIDAS VIDA CHEGAR A 0 IR PARA GAME OVER
		if(vida<= 0){
			runtime.goToLayout("gameover");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;

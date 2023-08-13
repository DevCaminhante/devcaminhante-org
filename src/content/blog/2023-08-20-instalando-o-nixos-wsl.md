---
title: Instalando o NixOS WSL
slug: 2023-08-20-instalando-o-nixos-wsl
author: Klaus Ferreira
date: 2023-08-20
---

#### Pré-requisitos

- Windows 10 versão 2004 ou mais recente (maior ou igual à Build 19041) ou Windows 11. Em versões anteriores deve-se
  fazer a instalação do WSL [manualmente](https://learn.microsoft.com/en-us/windows/wsl/install-manual).

#### Instalação do WSL

1. Abrir o PowerShell ou o Prompt de Comando (`cmd`) em modo administrador (abrir o Menu Iniciar e digitar 'powershell'
   ou 'cmd' respectivamente), digitar o comando abaixo e apertar Enter para executá-lo:

```powershell
wsl --install
```

Este comando habilitará os componentes necessários e instalará o Ubuntu como distribuição (_distro_) Linux por padrão, o
que pode ser alterado posteriormente (como será mostrado posteriormente).

2. Após o comando terminar suas operações, reiniciar o computador.

Na primeira vez que uma distro é inicializada, uma janela do console (terminal) será aberta e informará ao usuário que
espere que arquivos sejam descomprimidos (vulgo "dezipados") e armazenados no computador. Inicializações posteriores não
devem demorar mais que poucos segundos para estarem prontas pra serem utilizadas.

#### Instalando o NixOS no WSL

1. Criar a pasta onde será armazenada o instalador e o disco virtual quando estes forem executados;
2. Baixar a [release mais recente](https://github.com/nix-community/NixOS-WSL/releases/latest) do instalador do NixOS
   WSL na pasta criada anteriormente;
3. Abrir a pasta onde o download salvou o instalador;
4. Clicar com o botão direito do mouse em qualquer espaço vazio abaixo do instalador e escolher a opção de abrir no
   terminal;
5. Digitar o comando abaixo e apertar Enter para executá-lo:

```powershell
wsl --import NixOS . nixos-wsl-installer.tar.gz --version 2
```

A sintaxe do comando acima é a seguinte:

- O argumento `--import` importa para o WSL o arquivo **tar** indicado como uma nova distro;
- Este recebe 3 valores obrigatórios e um opcional, sendo que são usados todos nessa instalação;
- O primeiro valor (nesta instalação é o `Nixos`) é o nome que é dado à distro e aparecerá em lugares como no Windows
  Terminal e quando for usada a listagem de distros instaladas localmente (com os argumentos `--list --all`);
- O segundo valor (nesta instalação é o `.`, que significa a mesma pasta que foi aberta o terminal) indica o local da
  instalação;
- O terceiro valor (neste instalação é o `nixos-wsl-installer.tar.gz`) é o nome do arquivo que foi baixado;
- O argumento `--version` recebe o valor da versão do WSL desejada (nesta instalação é a `2`, que oferece suporte
  bastante melhorado à virtualização do Linux).

#### Inicializando o NixOS

1. Abrir o PowerShell ou o Prompt de Comando, digitar o comando abaixo e apertar Enter para executá-lo:

```powershell
wsl --distribution NixOS
```

O instalador desempacotará o sistema de arquivos e inicializará o NixOS. Alguns avisos sobre sistema de arquivos e
_locales_ podem ser ignorados. Depois do `systemd` ter iniciado, será apresentado o `prompt` do Bash na instalação nova
como folha do NixOS.

Se desejado, pode-se setar o NixOS como distro padrão usando o comando abaixo:

```powershell
wsl --set-default NixOS
```

#### Buildando um tarball atualizado e/ou personalizado

Assim que a instalação do NixOS WSL for concluída (ou estando disponível um OS com Nix instalado), é possível de se
criar um arquivo tarball atualizado com as últimas modificações da branch **main** do repositório do NixOS WSL (já que
as releases são fechadas à alterações) usando o comando abaixo:

```bash
nix build github:nix-community/NixOS-WSL#nixosConfigurations.mysystem.config.system.build.installer
```

O caminho do tarball resultante dessa operação poderá ser acessado seguindo o link simbólico do arquivo `result`, que é
gerado na pasta onde o comando anterior foi executado. Usando o comando `ls -lah` é possível ver o caminho completo do
tarball (que recebe o caminho relativo de `./result/tarball/nixos-wsl-installer.tar.gz`), de onde pode ser
copiado/movido para um local mais adequado.

Se caso o arquivo `/etc/nixos/configuration.nix` foi personalizado, o tarball pode ser criado utilizando essas
personalizações usando-se o comando abaixo no lugar do apresentado anteriormente:

```bash
nix build .#nixosConfigurations.mysystem.config.system.build.installer
```

É também possível que o tarball seja criado sem o instalador como wrapper, bastando usar `tarball` no lugar
de `installer` nos comandos acima.

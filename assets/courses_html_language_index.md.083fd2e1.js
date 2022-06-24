import{_ as e,c as a,o as s,a as n}from"./app.e51ebc4b.js";const h=JSON.parse(`{"title":"HTML, Introduction","description":"","frontmatter":{"title":"HTML, Introduction"},"headers":[{"level":2,"title":"Qu'est-ce que le langage HTML ?","slug":"qu-est-ce-que-le-langage-html"},{"level":2,"title":"Pr\xE9parer son environnement de travail","slug":"preparer-son-environnement-de-travail"},{"level":3,"title":"Sur Windows","slug":"sur-windows"},{"level":3,"title":"Sur macOS","slug":"sur-macos"},{"level":2,"title":"Cr\xE9er ma premi\xE8re page HTML","slug":"creer-ma-premiere-page-html"}],"relativePath":"courses/html/language/index.md"}`),t={name:"courses/html/language/index.md"},r=n(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><h2 id="qu-est-ce-que-le-langage-html" tabindex="-1">Qu&#39;est-ce que le langage HTML ? <a class="header-anchor" href="#qu-est-ce-que-le-langage-html" aria-hidden="true">#</a></h2><p>Le HTML veut dire HyperText Markup Language, autrement dit Langage de Balisage HyperTexte. C&#39;est une syntaxe de code h\xE9rit\xE9e du <a href="https://fr.wikipedia.org/wiki/Extensible_Markup_Language" target="_blank" rel="noopener noreferrer">XML</a> dont tous les navigateur web ont la connaissance et qui permet de structurer une page web.</p><h2 id="preparer-son-environnement-de-travail" tabindex="-1">Pr\xE9parer son environnement de travail <a class="header-anchor" href="#preparer-son-environnement-de-travail" aria-hidden="true">#</a></h2><p>\xC9crire du code n\xE9cessite d&#39;avoir un \xE9diteur adapt\xE9. Si votre \xE9diteur de texte est acceptable pour lire et \xE9crire un langage naturel, la lisibilit\xE9 sera bien insuffisante pour un langage informatique.</p><p>C&#39;est pourquoi il a \xE9t\xE9 invent\xE9 la coloration syntaxique. Chaque groupe de caract\xE8re et mot cl\xE9 a une fonction diff\xE9rente et celle-ci est repr\xE9sent\xE9e par une couleur. Prenez comme exemple l&#39;extrait de code ci-dessous.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Ceci est le titre de ma page</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">background-color: #eee</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Bienvenue sur mon site !</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Seul un \xE9diteur de code permet de colorer votre code au cours de l&#39;\xE9dition. C&#39;est pourquoi je vous recommande d&#39;installer <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>. La communaut\xE9 a pris l&#39;habitude d&#39;abr\xE9ger son nom par <em>VSCode</em>, c&#39;est donc tout naturellement que je le nommerai ainsi dans ce guide.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Cet \xE9diteur d\xE9velopp\xE9 par Microsoft est parfaitement adapt\xE9 aux technologies web. Accompagn\xE9 d&#39;un magasin d&#39;extensions tr\xE8s fourni, il s&#39;adapte facilement \xE0 n&#39;importe quel langage.</p></div><h3 id="sur-windows" tabindex="-1">Sur Windows <a class="header-anchor" href="#sur-windows" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Lors de l&#39;installation sur un environnement <strong>Windows</strong>, veillez \xE0 <strong>cocher les cases</strong> &quot;Add &#39;Open with Code&#39;&quot; et &quot;Add to PATH&quot;. Cela vous facilitera la vie (Vous me remercierez plus tard \u{1F609}).</p></div><h3 id="sur-macos" tabindex="-1">Sur macOS <a class="header-anchor" href="#sur-macos" aria-hidden="true">#</a></h3><p>Pour les utilisateurs de <a href="https://brew.sh" target="_blank" rel="noopener noreferrer">Homebrew</a> (aka les pro-users), vous pouvez installer <em>VSCode</em> \xE0 l&#39;aide d&#39;une simple commande dans votre terminal favori.</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">brew install --cask visual-studio-code</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><em><strong>\u{1F4AC} Je ne connais pas Homebrew, qu&#39;est-ce que c&#39;est ?</strong></em></p><p>C&#39;est un gestionnaire de paquets/d\xE9pendances pour macOS. Il permet d&#39;installer facilement des outils en ligne de commande (CLI) et des applications graphiques (GUI).</p></div><h2 id="creer-ma-premiere-page-html" tabindex="-1">Cr\xE9er ma premi\xE8re page HTML <a class="header-anchor" href="#creer-ma-premiere-page-html" aria-hidden="true">#</a></h2><p>Chaque page web est repr\xE9sent\xE9e par un fichier dont l&#39;extension est <code>.html</code>. Il est de convention de nommer le fichier de la page d&#39;accueil d&#39;un site web <code>index.html</code>.</p><p>Cr\xE9ez un dossier &quot;Mon premier site web&quot; et ouvrez-le dans <em>VSCode</em>. Dans l&#39;explorateur de fichiers (panneau gauche de l&#39;interface), cr\xE9ez votre <code>index.html</code>.</p><ol><li>Clic-droit dans la zone vide &gt; <em>Nouveau fichier</em></li><li>Clic-droit sur le fichier fra\xEEchement cr\xE9\xE9 &gt; <em>Afficher dans le...</em></li><li>Double-droit sur le fichier &gt; <em>Ouvrir avec</em> &gt; [Votre navigateur pr\xE9f\xE9r\xE9]</li></ol><p>Bravo ! Vous avez cr\xE9\xE9 votre premi\xE8re page web !</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>\u{1F4AC} C&#39;est super ! Mais ma page est blanche, c&#39;est normal ?</strong></p><p>Oui, nous avons cr\xE9\xE9 un fichier HTML vide. Avant d&#39;\xE9diter quoi que ce soit, nous devons apprendre la syntaxe du HTML.</p></div>`,21),l=[r];function o(p,i,c,d,u,m){return s(),a("div",null,l)}var D=e(t,[["render",o]]);export{h as __pageData,D as default};
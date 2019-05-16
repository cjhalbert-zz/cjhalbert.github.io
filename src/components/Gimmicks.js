import React, { Component } from 'react';

import winner from '../assets/gimmicks/winner.png'
import ketchup from '../assets/gimmicks/ketchup.jpg'
import flop from '../assets/gimmicks/flop.jpg'
import dutch from '../assets/gimmicks/dutch.jpg'
import spacejam from '../assets/gimmicks/spacejam.png'






class Gimmicks extends Component {

    componentDidMount() {
        document.getElementsByTagName('body')[0].classList.remove('body-sidelines');
    }

    followThing(e) {
        var rect = e.target.getBoundingClientRect()
        var thing = document.getElementById('thing');
        thing.style.top = (e.clientY - rect.top) - 500 + "px";
        thing.style.left = (e.clientX - rect.left) - 500 + "px";
    }

    

    render() {
        return (
            <div className="gimmicks">
                <div id="thing" className="thing"></div>
                <section className="gimmicks-title" onMouseMove={(evt) => this.followThing(evt)}>
                    <h1>GIMMICKS</h1>
                    <a href="/gallery">GIMMICKS GALLERY</a>
                    <svg class="icon arrow" height="512" viewBox="0 0 1024 1024" version="1.1" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.261 341.088l123.607-123.485 339.206 339.17 339.074-339.17 123.559 123.485-462.63 462.81z" />
                    </svg>
                </section>
                <section className="gimmicks-body">
                    <div></div>
                    <h1>Knuckleballs, Dutch Angles, and Pop-ups: An Examination and Demonstration of Gimmicks in Sports, Media, and the Web</h1>
                    <h2>Written By Corey Halbert</h2>
                    <figure>
                        <img src={winner} alt=""/>
                        <figcaption>A common gimmick from the early web</figcaption>    
                    </figure>
                    <p>When you think of the word gimmick, several things come to mind. “Cheap,” or “Tacky,” or maybe even “Annoying.” The word gimmick has come to be associated with these feelings and ideas because we are constantly being inundated by products we associate with them. We think of gimmicks as cheap tactics employed by corporations to sell products. We think of cereal boxes with toys in them, toothbrushes that play music when you use them, or more recently, electronic hover boards as Christmas gifts. All of these products with unnecessary add-ons that are seemingly only attempting to take advantage of industry trends and exploit children or unwitting consumers in order to maximize profit. Gimmicks seem disingenuous, and often times I think they are.</p>

<p>Gimmicks aren’t always bad, however. Often times, gimmicks have become extremely useful and permanent features. For example, the shampoo and ketchup worlds were revolutionized in 1991 when a precision-molding shop owner named Paul Brown invented the upside-down bottle. This bottle design, that prevented leaking and allowed for immediate dispensing of the shampoo/ketchup was picked up by ketchup companies like Heinz and Hunt and eventually was adopted by virtually every company that sold a product in a similar bottle (Greve, 2007). This gimmick that changed an entire industry started out as a novel and simple idea.</p>

<figure>
    <img src={ketchup} alt="Ketchup Bottle"/>
    <figcaption>A Heinz Ketchup "Upside Down" Bottle</figcaption>
</figure>

<p>We see gimmicks in competition too. Trick plays, unorthodox player techniques or team strategies, and interesting rule decisions are all sometimes seen as gimmicks. A knuckleball pitch in baseball is an incredibly rare pitching style that almost no one does, and when pitchers do throw knuckleballs, it’s exciting to watch as not many batters or catchers are experienced with it. However, many coaches don’t want knuckleball pitchers, as they don’t think it is a respectable way to play the game of baseball (Memmott, 2019). Similarly, in the sport of basketball, the shot clock was introduced to deter players from not attempting shots. A famous game between The Fort Wayne Pistons and the Minneapolis Lakers where The Pistons won with a score of 19-18 total prompted the NBA to institute a shot clock. The low-scoring games were seen as boring and uninteresting, and against the spirit of the game (NBA). </p>

<p>Another place we see gimmicks a lot is on the web. Attention is an extremely valuable resource on the internet. Thousands of advertisements are thrown at us every second while browsing the web, hoping that we’ll give a few seconds of our time to view their website or app or video. Because of this, lots of companies have tried to use gimmicks to increase engagement with their advertisements, and to attempt to increase traffic on their websites, apps, etc. Websites have also employed gimmicks on the sites themselves. Small interactions with buttons, popups, videos, and animations have been developed to increase enjoyment and interaction with sites.</p>

<p>Gimmicks are so wholly pervasive in our media, forms of competition, and everyday lives, that it’s impossible to escape them. I want to examine and provide demonstrations of several prominent gimmicks in these areas to analyze how and why gimmicks are seen in such a negative light. </p>

<h3>DEFINITIONS</h3>

<p>In this article, I want to dive as deeply as possible into what gimmicks are, and how they affect people's interaction with sports, media, and the Internet. I think before we jump into that however, we need to define what a gimmick is. This is much more complicated as it sounds though. The concept of gimmicks is an incredibly nuanced and layered one. Before we even begin to define what gimmicks are, we need to define a few other terms. </p>

<p>The first term that I’d like to define to begin to set the stage for talking about gimmicks is the concept of <b>novelty</b>. Novelty, as defined by Merriam-Webster, is, “The quality of being new or unusual” (Merriam-Webster, 2019). Novelty seems deeper than this though. I would expand this definition to be, “The quality of being new, unusual, surprising, or unique.” I think novelty implies surprise and uniqueness. We call things new or unusual all the time without thinking of them as <i>novel. </i>In order for us to label something as being a novelty, it needs to surprise us by being different from what we normally expect. We call new food inventions novel because they are unique and unconventional, not necessarily because they are simply new. I think that novelty is the first of many factors that constitute something being a <b>gimmick. </b></p>

<p>The second concept I’d like to define is the concept of <b>value. </b>I want to define value specifically as it relates to devices or ideas, or products and services. As with novelty, I’ll start with the Merriam-Webster definition, as It’s a good springboard into further analysis. Merriam-Webster defines value as, “Relative worth, utility, or importance” or, “Something (such as a principle or quality) intrinsically valuable or desirable” (Merriam-Webster, 2019). I think the latter definition is especially important when discussing value as related to gimmicks. These definitions imply that value is inherent in everything. That everything is on some scale or spectrum of desirability or importance, and that this value is naturally of the thing itself. I think that I would change this definition as well to reflect the environment that I will be analyzing gimmicks in. I would change this definition to say that value is something inherent in the person viewing or analyzing the device, idea, product, or service. All consumers, users, or people hold different things in different light, and thus, we assign value to different things differently. I’d say that value is the importance that an individual places on a device or idea based on their experiences, needs, and background.”</p>

<p>The third and most important concept that we need to define before jumping into how gimmicks are defined is the concept of <b>attention</b>. The Merriam-Webster definition for attention states that it is, “The act or state of applying the mind to something” or, “a condition of readiness for such attention involving especially a selective narrowing or focusing of consciousness and receptivity.” I think that this definition applies fairly well to how I’m defining gimmicks for this paper, so I don’t think I’ll add anything to it. I do want to stress however the importance of attention, and its connection to novelty and value. Attention itself isn’t a property of gimmicks like novelty or value, it’s more a product of gimmicks. Or possibly the goal. Attention is what results from a successful gimmick. </p>

<p>Now that we’ve defined novelty, value, and attention, we can move on to describing how these three concepts intersect to create a <b>gimmick</b>. For the final time, we’ll start with the Merriam-Webster definition. The dictionary has several definitions, already showing how complicated the term is. The first definition states that a gimmick is, “A mechanical device for secretly and dishonestly controlling gambling apparatus.” Or, “An ingenious or novel mechanical device.” This isn’t really how we’re defining gimmicks. The synonym “Gadget” is supplied here, which doesn’t seem to fit. The second definition says, “An important feature that is not immediately apparent.” This gets more towards how I’m trying to define gimmicks. I would say that gimmicks are not always important, and sometimes they are incredibly apparent and obvious. The third definition says, “An ingenious and usually new scheme or angle,” and the fourth definition says, “A trick or device used to attract business or attention.” These last two definitions are getting much more to how I see gimmicks. Gimmicks are often novel and ingenious; they capture people’s attention based on their uniqueness and element of surprise. Gimmicks are also often thought of as tricks or devices. They are thought to be cheap or tacky, or somehow disingenuous.</p>

<p>I think that these definitions paint a pretty good picture of what gimmicks are, and provide a good basis for how I’ll be examining the different gimmicks presented in this article.</p>

<h3>SPORTS</h3>

<p>Sports and competition are an area where gimmicks are incredibly prominent. The ultimate goal of competition is to win, so individuals engaging in sports or games that are competitive will often do whatever it takes to win, and that includes using techniques or strategies that could be seen by spectators or other players as being gimmicky. Usually these techniques employ strategies that rely on unique or unorthodox play that isn’t seen very often, or they rely on their opponent not knowing how to react or combat their technique. Most of these types of strategies and techniques are looked down upon or discouraged in their respective competitive communities. </p>

<p>Several different techniques in several different sports have been considered gimmicks. As alluded to in the title and introduction of this article, the knuckleball pitch in baseball is an extremely well-known gimmick. The knuckleball pitch is performed by holding the ball with your knuckles, hence the name, or by digging the fingernails into the ball. Once thrown, the ball spins much less than a regular pitch and follows an erratic and slow path through the air, making it difficult for batters to hit. </p>

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YosjuFFE0zM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption>How to Pitch a Knuckleball</figcaption>
</figure>

<p>The knuckleball pitch is incredibly novel. In the 2018 MLB season, there were only a handful of prominent knuckleball pitchers, notably among them being Red Sox pitcher Steven Wright. The knuckleball pitch is so difficult, and so different from a regular fastball pitch, that you have to basically abandon practicing any other pitch in order to master it (James, Neyer, 2004). Throughout baseball history the knuckleball has been considered an oddball pitch and has never really broken into being a mainstream part of the way baseball is played.</p>

<p>The most interesting thing about the knuckleball however is how the community surrounding baseball perceives the knuckleball. It has continually been looked down upon by baseball players and fans alike for being against the spirit of the game. Alan Nathan, a physics professor at the University of Illinois Mark Memmott from NPR that, "There's a stigma attached to the knuckleball" by many in baseball. "It's seen as a 'trick pitch.' It's not 'really baseball.' " (Memmott, 2013). This idea is held by many different baseball fans and players. They see the knuckleball as a gimmick with little value to the game of baseball. </p>

<p>The modern high jump technique is another technique originally perceived as a gimmick. High jump as a track and field event has been constantly revolutionized over its history as a sport. Since its inception in the 19<sup>th</sup> century, high jumpers have consistently come up with new and different gimmicks to increase their height. Jumpers initially would simply run towards the bar and attempt to leap straight over it, or would attempt to lift one leg over first and roll their body over the bar. However, at the 1968 Summer Olympics, American high jumper Dick Fosbury took home the gold medal by utilizing a technique now referred to as, “The Fosbury Flop.” The technique involved jumping over the bar backwards, head and shoulders first, and flopping on to the mat behind the bar. This technique eventually spread to nearly every single other high jump competition, and still to this day remains the most popular technique for high jumpers (Durso, 1968). </p>

<figure>
    <img src={flop} alt=""/>
    <figcaption>The Fosbury Flop</figcaption>
</figure>

<h3>MEDIA</h3>

<p>Probably the area that people are most familiar with gimmicks in is the media. Advertising and Marketing are thrust upon us from the moment that we’re born. Canadian philosopher Marshall McLuhan, in his seminal 1967 book <i>The Medium is the Massage: An Inventory of Effects</i> stated that, “All media work us over completely” (McLuhan, 1967). This phrase opens up his discussion on how media are like extensions of our senses, and how we cannot escape the influence and effects that media have. This is probably why we are so aware when individuals or corporations pervert those media, and use them in novel ways. We are so attuned to the ways that media affects us that when it is done abnormally we are instantly cognizant of it. This is what marketing and advertising companies use to their advantage with gimmicks. </p>

<p>Marketing and advertising gimmicks are infinite. Because attention is such a scarce resource, often times advertisers have to resort to using novel, cheap, and attention grabbing techniques to attempt to sway their potential customers. Often times bright colors, loud voices, eye-catching visuals, and other spectacular elements are included in radio and television commercials along with any other number of gimmicky strategies.</p>

<p>An extremely common gimmick amongst advertisers is the use of contests or giveaways. Listeners or viewers of the advertisements are encouraged to signup for a giveaway, either consisting of products or money. Often times in order to sign up for these contests or giveaways, you are required to purchase a product from the company. For example, often times these contests are advertised on cereal boxes.</p>

<p>Another gimmick associated with cereal are collectible prizes. Cereal companies often will include toys or collectible figures in the box, that differ from box to box. Consumers of this cereal are then encouraged to keep buying more cereal in order to collect all of the toys or figures. </p>

<p>These types of gimmicks related to products are used primarily to encourage and create new sales after the original sale has already been made, but most gimmicks in advertising and marketing are to increase initial sales. </p>

<p>One of the most prominent examples of this is the use of sales and markdowns to sell products. Often times retailers will markdown the price of some of their products in order to sell them faster. The retailer will make less profit off of each individual sale, but there will be more sales, thus increasing profit on possibly less desirable products. This will often happen with items that are approaching expiration dates, or with items that need to be cleared out or gotten rid of. Sometimes however, sales are applied to products misleadingly. Furniture stores in particular often will create sales off of the MSRP (Manufacturer’s Suggested Retail Price) instead of the actual sale price. This causes sales to look much more appealing. For example: If a recliner’s MSRP is $1000 but usually sells closer to $600, a furniture store might decide to sell it at $300 and say it’s 70% off MSRP instead of 50% off sale price. The 70% sale looks like way better of a deal than 50%, even though it’s the same price.</p>

<p>This gimmick is novel, as it is surprising, and differs from the norm. When you see the 70% sale you are astounded, as it seems too good to be true. This gimmick does have some value, as it provides the consumer with a discounted price for the product they are purchasing. These types of gimmicks are incredibly useful for attracting attention. Retailers and marketing and advertising companies will use sales to further advertise their products. Huge billboards with percent signs and numbers on them are constantly up outside businesses and on highways. When you see sales in stores there’s usually a huge yellow sticker on the packaging or on the display case. The gimmick of price markdowns is incredibly effective. </p>

<p>Gimmicks are also used in media outside of marketing and advertising. Music and movies are also rife with production gimmicks. Genres of music, producers, and even decades themselves often have gimmicks associated with them. Bluegrass musicians are famous for using banjos, the producer Steve Albini is known for his cold, sterile, yet noisy production style, and the 80s is known for being full of–, well, full of gimmicks. Musical artists employ gimmicks for the same reason that advertisers do: to stand out. </p>

<p>One noticeable gimmick in contemporary music is the use of the “Triplet Flow” or “Migos Flow”. This rhythmic style often used in hip-hop and trap music is a style that has been used for decades, but has recently been popularized by Atlanta hip-hop trio Migos. In a video from Vox.com Estelle Caswell breaks down the flow and talks about its history, and how it has been used as a tool by several different artists throughout musical history, even pointing to its use in Beethoven’s <i>Moonlight Sonata</i> (Caswell, 2017). Many people hear this flow in hundreds of songs and think that it is just a gimmick that rappers are using as a crutch, or as an excuse to not be creative. </p>

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3la8bsi4P-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption>How The Triplet Flow Took Over Rap</figcaption>
</figure>

<p>In movies, certain camera and editing techniques have been deemed gimmicks. One camera angle in particular has gained significant hatred in film communities. The camera angle, referred to as the, “Dutch Angle,” involves tilting the camera on it’s side diagonally to create the illusion of one turning their head to the side. The angle is used often in horror and science fiction movies to represent characters or situations that are insane, mysterious, or disorienting. The angle has come under fire from several critics who have deemed it cheesy or overused. One critic in particular, Roger Ebert, referred to the director of Battlefield Earth (2000) Roger Christian, when he said, “The director has learned from better films that directors sometimes tilt their cameras, but he has not learned why.” </p>

<figure>
    <img src={dutch} alt=""/>
    <figcaption>Dutch angle from the film <i>The Cabinet of Dr. Caligari</i> by Robert Weine</figcaption>
</figure>

<h3>THE INTERNET</h3>

<p>Gimmicks on the internet are significantly different from gimmicks in sports or in advertising and media. Gimmicks on the internet aren’t necessarily to increase sales, or to gain the upper hand in competition. Gimmicks on the Internet are often used to keep people on the sites that they are using, or to increase engagement with the site’s content, or to even increase enjoyment with the site. When the internet first became popular, gimmicks were everywhere. Audio playing when you loaded the site, guest books, site visit counters, obnoxiously patterned backgrounds, bright fonts and colors, etc. There were countless gimmicks employed by countless sites in order to stand out. Take a look at the old website promoting the movie Space Jam:</p>

<figure>
    <img src={spacejam} alt=""/>
</figure>

<p>This was a common site on the early internet. These gimmicks were novel, had no value, and were incredibly attention-grabbing, usually to the point of being annoying or distracting.</p>

<p>Today however, gimmicks are still there but have become subtler, and in the background. Small interactions or animations have replaced huge spectacles and loud music. On Twitter for example, when you like a Tweet, a small confetti animation plays. On Facebook, the status update text box reads, “What’s on your mind?” before you type anything. Google has an endless amount of Easter eggs buried in Google Maps, the Google search engine, and all of their various other products. These gimmicks aren’t in your face anymore, they are pleasant and low key. </p>

<p>Not all of these gimmicks are pleasant however. Another form of gimmick on the web has risen in recent years that aims to take advantage of users. These gimmicks, referred to as dark UI patterns, trick users into signing up for things that they don’t want to, go to sites that they didn’t mean to go to, and generally do things that the users don’t necessarily want to do. Some of these patterns (pulled from darkpatterns.org, an organization aiming to spread awareness of the patterns) include commerce sites slipping additional products into your purchase basket before you buy, hidden fees and costs, timed and unavoidable popups, and clickable advertisements that look like buttons or navigational elements. These patterns take advantage of our sense of what is normal and expected on the internet.</p>

<h3>CONCLUSION</h3>

<p>Gimmicks get a bad reputation. We see them everyday, and they seem cheap, or forced, and often times they are. But I think that gimmicks are misunderstood. Gimmicks can be cheap tactics employed by uncreative, uninspired, and sometimes even malicious corporations trying to steal your money and attention, but sometimes they can be helpful, efficient, pleasant, and sometimes even turn into universally loved and enjoyed products or techniques.</p>

<h3>SOURCES</h3>

<div className="sources">
<p><i>attention</i>. 2019. In Merriam-Webster.com.

Retrieved February 25, 2019, from <a href="https://www.merriam-webster.com/dictionary/attention">https://www.merriam-webster.com/dictionary/attention</a> </p>

<p>Caswell, E. (2017, September 18). <i>How the triplet flow took over rap</i>. Retrieved from <a href="https://www.vox.com/2017/9/18/16328330/migos-triplet-flow-rap">https://www.vox.com/2017/9/18/16328330/migos-triplet-flow-rap</a></p>

<p>Durso, J. (1968, October 20). <i>Fearless Fosbury Flops to Glory</i>. <i>The New York Times</i>. Retrieved May 15, 2019, from <a href="http://archive.nytimes.com/www.nytimes.com/packages/html/sports/year_in_sports/10.20.html">http://archive.nytimes.com/www.nytimes.com/packages/html/sports/year_in_sports/10.20.html</a></p>

<p>Ebert, R. (2000, May 12). Battlefield Earth Movie Review (2000) | Roger Ebert. Retrieved from https://www.rogerebert.com/reviews/battlefield-earth-2000</p>

<p><i>gimmick</i>. 2019. In Merriam-Webster.com.

Retrieved March 28, 2019, from <a href="https://www.merriam-webster.com/dictionary/gimmick">https://www.merriam-webster.com/dictionary/gimmick</a></p>

<p>Greve, F. (2007, June 28). Ketchup is better with upside-down, bigger bottle. Retrieved from <a href="https://www.mcclatchydc.com/news/nation-world/national/article24465613.html">https://www.mcclatchydc.com/news/nation-world/national/article24465613.html</a></p>

<p><i>History of the Shot Clock</i>. (n.d.). Retrieved May 15, 2019, from <a href="https://www.webcitation.org/651DP4PzV">https://www.webcitation.org/651DP4PzV</a></p>

<p>James, B., &amp; Neyer, R. (2004). <i>The Neyer/James guide to pitchers: An historical compendium of pitching, pitchers, and pitches</i>. New York: Fireside.</p>

<p>McLuhan, M., &amp; Fiore, Q. (1967). <i>Medium is the massage: An inventory of effects</i>. USA: Bantam books.</p>

<p>Memmott, M. (2013, August 14). <i>The Knuckleball Can Devastate, So Why Don't All Pitchers Throw It?</i> Retrieved from https://www.npr.org/sections/thetwo-way/2013/08/13/211667018/the-knuckleball-can-devastate-so-why-dont-all-pitchers-throw-it</p>

<p><i>novelty</i>. 2019. In Merriam-Webster.com.

Retrieved February 25, 2019, from <a href="https://www.merriam-webster.com/dictionary/novelty">https://www.merriam-webster.com/dictionary/novelty</a></p>

<p><i>Types of Dark Pattern. (n.d.). Retrieved from https://www.darkpatterns.org/types-of-dark-pattern</i></p>

<p><i>value</i>. 2019. In Merriam-Webster.com.

Retrieved February 25, 2019, from <a href="https://www.merriam-webster.com/dictionary/value">https://www.merriam-webster.com/dictionary/value</a></p>

<p>Wiene, R., Adkinson, R. V., Mayer, C., &amp; Janowitz, H. (1972). The cabinet of Dr. Caligari: A film by Robert Wiene, Carl Mayer and Hans Janowitz. English translation and description of action by R.V. Adkinson. London: Lorrimer Pub. </p>

<p><a href="https://knowyourmeme.com/photos/1110322-congratulations-you-won">https://knowyourmeme.com/photos/1110322-congratulations-you-won</a></p>

<p><a href="https://www.youtube.com/watch?v=9SlVLyNixqU">https://www.youtube.com/watch?v=9SlVLyNixqU</a></p>

<p><a href="https://www.spacejam.com/archive/spacejam/movie/jam.htm">https://www.spacejam.com/archive/spacejam/movie/jam.htm</a></p>

<p><a href="https://www.amazon.com/Heinz-Tomato-Ketchup-Squeeze-Bottle/dp/B0025UCA9W">https://www.amazon.com/Heinz-Tomato-Ketchup-Squeeze-Bottle/dp/B0025UCA9W</a></p>

</div>







                </section>
            </div>
        )
    }
}

export default Gimmicks;

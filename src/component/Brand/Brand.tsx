import "./Brand.css";
export const Brand = () => {
  return (
    <div>
      <div className="brand-image"></div>
      <h1 className="brand-title"> Привет, мой дорогой мечтатель! </h1>
      <h2 className="brand-subtitle">
        Меня зовут Юлия Войтенко,
        <br /> и я свяжу твою мечту!{" "}
      </h2>
      <span className="brand-content">
        <div className="brand-content-row">
          <div className="brand-content-column-text">
            <div className="brand-content-subtitle">
              Вязаные вещи давно уже появляются на модных показах, они могут
              быть стильными и трендовыми, но в то же время базовыми. Их носят в
              любое время года. К тому же при заказе вязаных изделий бренда
              J.Asteria можно быть уверенным, что материалы выбираются только
              самые лучшие, чего не встретишь в масс-маркете. Никакого 100%
              акрила, только качественная пряжа с натуральным составом.
            </div>
          </div>
          <div className="brand-content-column-img">
            <div className="brand-content-pic1"></div>
          </div>
        </div>
        <div className="brand-content-row">
          <div className="brand-content-column-img">
            <div className="brand-content-pic2"></div>
          </div>
          <div className="brand-content-column-text">
            <div className="brand-content-title">Как появился бренд?</div>
            <div className="brand-content-subtitle">
              Всё началось в 2018 году с шапки "Таккори", с тех пор практически
              каждый день я не расставалась со спицами или крючком, вязала
              абсолютно разные изделия, училась. И в конце 2022 года
              презентовала свой бренд J.Asteria.
            </div>
            <div className="brand-content-title">Так почему же J.Asteria?</div>
            <div className="brand-content-subtitle">
              В древнегреческой мифологии Астерия - богиня падающих звёзд, а я
              очень люблю звёзды, к тому же это такая аллегория мечтам, не зря
              же, когда звёзды падают, нужно загадывать желание.
            </div>
          </div>
        </div>
        <div className="brand-content-subtitle brand-content-subtitle-color">
          Слоган "Свяжу твою мечту", и вот всё сходится: под брендом J.Asteria
          исполняются тёплые, уютные, красивые мечты. А буковка J - первая буква
          моего имени. Так и родилось название J.Asteria.
        </div>
        <div className="brand-content-subtitle brand-content-subtitle-footer">
          Буду очень рада видеть Вас в числе моих клиентов, с ассортиментом
          можно ознакомиться в разделе "Каталог", Вы можете связаться со мной
          любым удобным способом и оставить заявку на заказ в карточке каталога
          или в разделе "Контакты".
        </div>
      </span>
    </div>
  );
};

class ApplicationSerializer < Blueprinter::Base
  def self.render(resource, **options)  

    super(resource, **options)
  end
end